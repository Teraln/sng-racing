<template>
  <div class="DriversAdmin">
    <v-container>
      <v-row justify="center">
        <v-col cols="4">
          <v-row class="mb-5" justify="space-between">
            <H1>Drivers</H1>

            <v-spacer></v-spacer>
            <v-btn fab dark color="primary">
              <v-icon>mdi-account-plus</v-icon>
            </v-btn>
          </v-row>
          <v-banner
            class="text-capitalize"
            v-for="driver in allDrivers"
            :key="driver.name"
            single-line
          >
            {{ driver.name }}
            <template v-slot:actions>
              <DriversModal />
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
import { mapGetters } from "vuex";

export default {
  name: "DriversAdmin",
  components: {
    DriversModal
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allDrivers"])
  }
};
</script>