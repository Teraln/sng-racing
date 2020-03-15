<template>
  <div class="GalleryModalEdit">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">edit</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline text-capitalize">{{ gallery.title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Title" v-model="localData.title" ref="focus" required></v-text-field>
              </v-col>

              <!--Gallery photo upload-->
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
                  <img :src="gallery.imageURL" alt="No image" />
                </v-avatar>
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
  name: "GalleryModalEdit",
  props: ["gallery", "getGallery"],
  data() {
    return {
      localData: API.galleryTemplate(),

      dialog: false,
      success: false,
      imageSnapshot: null
    };
  },
  methods: {
    assignDefaultValues() {
      const ld = this.localData;
      const d = this.gallery;
      ld.title = d.title;
      ld.imageURL = d.imageURL;
      ld.id = d.id;
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
        API.postFile("gallery", file.name, file, this.saveEdits);
      }
    },
    saveEdits(link) {
      if (!link) {
        API.edit("gallery", this.localData, this.localData.id);
      } else {
        this.localData.imageURL = link;
        API.edit("gallery", this.localData, this.localData.id);
      }

      this.getGallery();
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