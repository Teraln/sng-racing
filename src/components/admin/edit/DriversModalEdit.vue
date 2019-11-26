<template>
  <div class="DriversModalEdit">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">edit</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline text-capitalize">{{ `${driver.name} ${driver.lastname}` }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="First name" v-model="localData.name" ref="focus" required></v-text-field>
              </v-col>
              <!-- <v-col cols="12" sm="6" md="4"> -->
              <!-- <v-text-field label="Nickname"></v-text-field> -->
              <!-- hint="example of helper text only on focus" -->
              <!-- hint="example of persistent helper text" persistent-hint-->
              <!-- </v-col> -->
              <v-col cols="12" md="6" sm="6">
                <v-text-field label="Last name" v-model="localData.lastname" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Country" v-model="localData.country" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Role" v-model="localData.role" required></v-text-field>
              </v-col>
              <v-col cols="12">
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

              <!--Driver photo upload-->
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
                  <img :src="driver.imageURL" alt="No image" />
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
  name: "DriversModalEdit",
  props: ["driver", "getDrivers"],
  data() {
    return {
      localData: API.driverTemplate(),

      dialog: false,
      success: false,
      imageSnapshot: null
    };
  },
  methods: {
    assignDefaultValues() {
      const ld = this.localData;
      const d = this.driver;
      ld.name = d.name;
      ld.lastname = d.lastname;
      ld.country = d.country;
      ld.role = d.role;
      ld.id = d.id;
      ld.series = d.series;
      ld.year = d.year;
      ld.month = d.month;
      ld.day = d.day;
    },
    saveImageSnapshot(file) {
      this.imageSnapshot = file;
      this.success = true;
    },

    uploadImage(file) {
      //TODO delet
      console.log(file);
      this.dialog = false;

      if (!file) {
        this.saveEdits();
      } else {
        API.postFile("drivers", file.name, file, this.saveEdits);
      }
    },
    saveEdits(link) {
      if (!link) {
        API.edit("drivers", this.localData, this.localData.id);
      } else {
        this.localData.imageURL = link;
        API.edit("drivers", this.localData, this.localData.id);
      }

      this.getDrivers();
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