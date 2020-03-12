<template>
  <div class="PartnersModalEdit">
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
                <v-text-field label="Name" v-model="localData.name" ref="focus" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Website link" v-model="localData.link" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea label="Description" v-model="localData.text" required></v-textarea>
              </v-col>

              <!--Partner photo upload-->
              <v-col cols="10">
                <v-file-input
                  label="Upload photo (Logo)"
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
  name: "PartnersModalNew",
  props: ["getPartners"],
  data() {
    return {
      dialog: false,
      success: false,
      imageSnapshot: null,

      localData: API.partnerTemplate()
    };
  },
  methods: {
    saveImageSnapshot(file) {
      this.imageSnapshot = file;
      this.success = true;
    },
    uploadImage(file) {
      this.dialog = false;
      if (file === null) {
        this.setNewPartner();
      } else {
        API.postFile("partners", file.name, file, this.setNewPartner);
      }
    },
    setNewPartner(link) {
      if (!link) {
        API.postNew("partners", this.localData);
      } else {
        this.localData.imageURL = link;
        API.postNew("partners", this.localData);
      }
      this.resetForm();
      this.getPartners();
    },
    resetForm() {
      this.localData = API.partnerTemplate();
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