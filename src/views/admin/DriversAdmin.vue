<template>
  <div class="DriversAdmin">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-row class="mb-5" justify="space-between">
            <H1>Drivers</H1>

            <v-spacer></v-spacer>

            <DriversModalNew />
          </v-row>
          
          <v-banner
            class="text-capitalize"
            v-for="driver in allDrivers"
            :key="driver.name + driver.lastname"
            single-line
          >
            {{ `${driver.name} ${driver.lastname}` }}
            <template v-slot:actions>
              <DriversModal :driver="driver" />
              <v-btn text outlined color="accent">delete</v-btn>
            </template>
          </v-banner>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DriversModal from "@/components/admin/DriversModal.vue";
import DriversModalNew from "@/components/admin/DriversModalNew.vue";
import Getter from "@/store/getter.js";

export default {
  name: "DriversAdmin",
  components: {
    DriversModal,
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
      this.allDrivers = Getter.getDrivers();
    }
  },
  created() {
    this.getDrivers();
  }
};
</script>