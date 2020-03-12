<template>
  <div class="PartnersModalEdit">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">edit</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline text-capitalize">{{ partner.name }}</span>
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
                  filled
                  dense
                  prepend-icon="mdi-camera"
                  :success="success"
                  @change="saveImageSnapshot"
                ></v-file-input>
              </v-col>
              <v-col cols="2" justify="center" align="center">
                <v-avatar>
                  <img :src="partner.imageURL" alt="No image" />
                </v-avatar>
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
  name: "PartnersModalEdit",
  props: ["partner", "getPartners"],
  data() {
    return {
      localData: API.partnerTemplate(),

      dialog: false,
      success: false,
      imageSnapshot: null
    };
  },
  methods: {
    assignDefaultValues() {
      const ld = this.localData;
      const d = this.partner;
      ld.name = d.name;
      ld.id = d.id;
      ld.text = d.text;
      ld.link = d.link;
      ld.imageURL = d.imageURL;
    },
    saveImageSnapshot(file) {
      this.imageSnapshot = file;
      this.success = true;
    },

    uploadImage(file) {
      //TODO delet
      this.dialog = false;

      if (!file) {
        this.saveEdits();
      } else {
        API.postFile("partners", file.name, file, this.saveEdits);
      }
    },
    saveEdits(link) {
      if (!link) {
        API.edit("partners", this.localData, this.localData.id);
      } else {
        this.localData.imageURL = link;
        API.edit("partners", this.localData, this.localData.id);
      }

      this.getPartners();
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