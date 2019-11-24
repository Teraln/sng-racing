<template>
  <div class="DriversAdmin">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-row class="mb-5" justify="space-between">
            <H1>Drivers</H1>

            <v-spacer></v-spacer>

            <DriversModalNew :getDrivers="getDrivers"/>
          </v-row>

          <v-banner
            class="text-capitalize"
            v-for="driver in allDrivers"
            :key="allDrivers.indexOf(driver)"
            single-line
          >
            {{ `${driver.name} ${driver.lastname}` }}
            <template v-slot:actions>
              <DriversModalEdit :driver="driver" :getDrivers="getDrivers"/>
              <v-btn text outlined color="accent">delete</v-btn>
            </template>
          </v-banner>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DriversModalEdit from "@/components/admin/DriversModalEdit.vue";
import DriversModalNew from "@/components/admin/DriversModalNew.vue";
import API from "@/store/API.js";

export default {
  name: "DriversAdmin",
  components: {
    DriversModalEdit,
    DriversModalNew
  },
  data() {
    return {
      allDrivers: null
    };
  },
  computed: {},
  methods: {
    getDrivers() {
      this.allDrivers = API.getData('drivers');
    }
  },
  created() {
    this.getDrivers();
  }

};
</script>