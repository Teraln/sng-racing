<template>
  <div class="NewsModalEdit">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">edit</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-capitalize">{{ news.title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Title" v-model="localData.title" ref="focus" required></v-text-field>
              </v-col>

              <v-col cols="12" md="6" sm="6">
                <v-text-field label="Platform (Sim)" v-model="localData.platform" required></v-text-field>
              </v-col>

              <v-col cols="12" class="pb-0">
                <small>Date</small>
              </v-col>
              <v-col cols="4">
                <v-text-field label="DD" type="number" v-model.number="localData.day" maxlength="2"></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="MM"
                  type="number"
                  v-model.number="localData.month"
                  maxlength="2"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="YYYY"
                  type="number"
                  v-model.number="localData.year"
                  maxlength="4"
                ></v-text-field>
              </v-col>

              <!--photo upload-->
              <v-col cols="10">
                <v-file-input
                  label="Upload photo"
                  filled
                  dense
                  prepend-icon="mdi-camera"
                  :success="success"
                  @change="saveImageSnapshot"
                ></v-file-input>
              </v-col>
              <v-col cols="2" justify="center" align="center">
                <v-avatar>
                  <img :src="news.imageURL" alt="No image" />
                </v-avatar>
              </v-col>
              <v-col cols="12">
                <v-textarea rows="30" outlined label="Article text" v-model="localData.text" required></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="uploadImage(imageSnapshot);">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import API from "@/store/API.js";

export default {
  name: "NewsModalEdit",
  props: ["news", "getNews"],
  data() {
    return {
      localData: API.newsTemplate(),

      dialog: false,
      success: false,
      imageSnapshot: null
    };
  },
  methods: {
    assignDefaultValues() {
      const ld = this.localData;
      const d = this.news;
      ld.title = d.title;
      ld.platform = d.platform;
      ld.day = d.day;
      ld.month = d.month;
      ld.year = d.year;
      ld.imageURL = d.imageURL;
      ld.paragraph = d.paragraph;
    },
    saveImageSnapshot(file) {
      this.imageSnapshot = file;
      this.success = true;
    },

    uploadImage(file) {
      this.dialog = false;

      if (!file) {
        this.saveEdits();
      } else {
        API.postFile("news", file.name, file, this.saveEdits);
      }
    },
    saveEdits(link) {
      if (!link) {
        API.edit("news", this.localData, this.localData.id);
      } else {
        this.localData.imageURL = link;
        API.edit("news", this.localData, this.localData.id);
      }

      this.getNews();
    }
  },
  watch: {
    dialog(val) {
      if (!val) return;
      requestAnimationFrame(() => {
        this.$refs.focus.focus();
      });
    }
  },

  created() {
    this.assignDefaultValues();
  }
};
</script>