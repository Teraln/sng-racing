<template>
  <div class="GalleryModalEdit">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn fab dark color="primary" v-on="on">
          <v-icon>mdi-image-plus</v-icon>
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
//import { mapActions, mapMutations } from "vuex";
import API from "@/store/API.js";

export default {
  name: "GalleryModalNew",
  props: ["getGallery"],
  data() {
    return {
      dialog: false,
      success: false,
      imageSnapshot: null,

      localData: API.galleryTemplate()
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
        this.setNewGallery();
      } else {
        API.postFile("gallery", file.name, file, this.setNewGallery);
      }
    },
    setNewGallery(link) {
      if (!link) {
        API.postNew("gallery", this.localData);
      } else {
        this.localData.imageURL = link;
        API.postNew("gallery", this.localData);
      }
      this.resetForm();
      this.getGallery();
    },
    resetForm() {
      this.localData = API.galleryTemplate();
      this.imageSnapshot = null;
      this.success = false;
      this.$refs.fileUpload.reset();
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