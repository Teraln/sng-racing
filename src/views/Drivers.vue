<template>
  <div class="Drivers">
    <Navbar />
    <TopParallax />
    <PartnerBelt />
    <v-container>
      <v-row justify="center">
        <v-col v-for="driver in drivers" :key="driver.id" md="4" sm="12">
          <DriverCard :driver="driver"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import TopParallax from "../components/TopParallax";
import PartnerBelt from "../components/PartnerBelt";
import DriverCard from "../components/drivers/DriverCard";

import API from '../store/API'

export default {
  name: "Drivers",
  components: { Navbar, TopParallax, PartnerBelt, DriverCard },
  data() {
    return {
      drivers: API.getData('drivers')
    };
  }
};
</script>

<style lang="scss" scoped>
</style>