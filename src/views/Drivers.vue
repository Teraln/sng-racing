<template>
  <div class="Drivers">
    <Navbar />
    <TopParallax />
    <PartnerBelt />
    <v-container>
      <v-row justify="center">
        <v-col v-for="n in 9" :key="n" md="6" sm="12">
          <DriverCard />
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

export default {
  name: "Drivers",
  components: { Navbar, TopParallax, PartnerBelt, DriverCard },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>