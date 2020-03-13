<template>
  <div class="NewsModalNew">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn fab dark color="primary" v-on="on">
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline text-capitalize"></span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Title" v-model="localData.title" ref="focus" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Platform (Sim)" v-model="localData.platform" required></v-text-field>
              </v-col>

              <v-col cols="12" class="pb-0">
                <small>Date</small>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="DD"
                  type="number"
                  v-model.number="localData.day"
                  maxlength="2"
                ></v-text-field>
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

              <v-col cols="8">
                <v-file-input
                  label="Upload photo"
                  ref="fileUpload"
                  filled
                  dense
                  prepend-icon="mdi-camera"
                  :success="success"
                  @change="saveImageSnapshot"
                ></v-file-input>
              </v-col>
                <v-col cols="12">
                <v-textarea rows="30" outlined label="Article text" v-model="localData.text" required></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">Close</v-btn>
          <v-btn color="primary" text @click="uploadImage(imageSnapshot);">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
//import { mapActions, mapMutations } from "vuex";
import API from "@/store/API.js";

export default {
  name: "NewsModalNew",
  props: ["getNews"],
  data() {
    return {
      dialog: false,
      success: false,
      imageSnapshot: null,

      localData: API.newsTemplate()
    };
  },
  methods: {
    saveImageSnapshot(file) {
      this.imageSnapshot = file;
      this.success = true;
    },
    uploadImage(file) {
      //TODO delet
      this.dialog = false;
      if (file === null) {
        this.setNewNews();
      } else {
        API.postFile("news", file.name, file, this.setNewNews);
      }
    },
    setNewNews(link) {
      if (!link) {
        API.postNew("news", this.localData);
      } else {
        this.localData.imageURL = link;
        API.postNew("news", this.localData);
      }
      this.resetForm();
      this.getNews();
    },
    resetForm() {
      this.localData = API.newsTemplate();
      this.imageSnapshot = null;
      this.$refs.fileUpload.reset();
      this.success = false;
    }
  },

  watch: {
    dialog(val) {
      if (!val) return;
      requestAnimationFrame(() => {
        this.$refs.focus.focus();
      });
    }
  }
};
</script>