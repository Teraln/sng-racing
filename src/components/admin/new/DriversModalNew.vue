<template>
  <div class="DriversModal">
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
                <v-text-field label="First name" v-model="driverData.name" ref="focus" required></v-text-field>
              </v-col>
              <!-- <v-col cols="12" sm="6" md="4"> -->
              <!-- <v-text-field label="Nickname"></v-text-field> -->
              <!-- hint="example of helper text only on focus" -->
              <!-- hint="example of persistent helper text" persistent-hint-->
              <!-- </v-col> -->
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Last name" v-model="driverData.lastname" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Country" v-model="driverData.country" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Role" v-model="driverData.role" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-file-input
                  label="Upload photo"
                  filled
                  dense
                  prepend-icon="mdi-camera"
                  :success="success"
                  @change="saveImageSnapshot"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="uploadImage(imageSnapshot);"
          >Save</v-btn>
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

      driverData: API.driverTemplate()

      // months: [
      //   "January",
      //   "February",
      //   "March",
      //   "April",
      //   "May",
      //   "June",
      //   "July",
      //   "August",
      //   "September",
      //   "October",
      //   "November",
      //   "December"
      // ]
    };
  },
  methods: {
    setNewDriver(link) {
      this.driverData.imageURL = link;
      API.postNew("drivers", this.driverData);
      this.dialog = false;
      this.getDrivers();
    },
    saveImageSnapshot(file) {
      this.imageSnapshot = file;
      this.success = true;
    },
    uploadImage(file) {
      //TODO delet
      console.log(file);
      if (file === null) {
        this.setNewDriver()
        } else {
        API.postFile("drivers", file.name, file, this.setNewDriver);
      }
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