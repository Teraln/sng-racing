<template>
  <div class="DriversModalNew">
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
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="First name" v-model="localData.name" ref="focus" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-text-field label="Last name" v-model="localData.lastname" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Country" v-model="localData.country" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Role" v-model="localData.role" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Series" v-model="localData.series" required></v-text-field>
              </v-col>

              <v-col cols="12" class="pb-0">
                <small>Birth date</small>
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
  name: "DriversModalNew",
  props: ["getDrivers"],
  data() {
    return {
      dialog: false,
      success: false,
      imageSnapshot: null,

      localData: API.driverTemplate()
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
        this.setNewDriver();
      } else {
        API.postFile("drivers", file.name, file, this.setNewDriver);
      }
    },
    setNewDriver(link) {
      if (!link) {
        API.postNew("drivers", this.localData);
      } else {
        this.localData.imageURL = link;
        API.postNew("drivers", this.localData);
      }
      this.resetForm();
      this.getDrivers();
    },
    resetForm() {
      this.localData = API.driverTemplate();
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