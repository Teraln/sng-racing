<template>
  <div class="Drivers">
    <Navbar />
    <TopParallax />
    <PartnerBelt />
    <v-container>
      <v-row justify="center">
        <v-col v-for="driver in drivers" :key="driver.id" lg="4" md="6" sm="12">
          <DriverCard :driver="driver" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import TopParallax from "../components/TopParallax";
import PartnerBelt from "../components/PartnerBelt";
import DriverCard from "../components/Elements/DriverCard";

export default {
  name: "Drivers",
  components: { Navbar, TopParallax, PartnerBelt, DriverCard },
  data() {
    return {
      drivers: []
    };
  },
  mounted() {
    //Get the data from Vuex
    this.drivers = this.$store.getters.drivers;
  }
};
</script>

<style lang="scss" scoped>
</style>