<template>
  <div class="DriversAdmin">
    <v-container>
      <H1 class="mb-4">Drivers</H1>
      <v-row>
        <v-banner v-for="driver in allDrivers" :key="driver.name" single-line>
          {{ driver.name }}
          <template v-slot:actions>
            <DriversModal />
            <v-btn text outlined color="accent">delete</v-btn>
          </template>
        </v-banner>
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