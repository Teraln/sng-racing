<template>
  <div class="home">
    <Navbar />
    <TopParallax />
    <PartnerBelt />
    <v-container>
      
    </v-container>
    <DriverCard />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import TopParallax from "../components/TopParallax";
import PartnerBelt from "../components/PartnerBelt";
import DriverCard from "../components/Elements/DriverCard";

export default {
  name: "home",
  components: { Navbar, TopParallax, PartnerBelt, DriverCard }
};
</script>
