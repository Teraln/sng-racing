<template>
  <div class="Drivers">
    <Navbar />
    <TopParallax />
    <PartnerBelt />
    <v-container>
      <v-row id="drivers-row" justify="center">
        <v-col v-for="driver in driversArray" :key="driver.id" lg="4" md="6" sm="12">
          <DriverCard :driver="driver" :grid="grid" />
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import TopParallax from "../components/TopParallax";
import PartnerBelt from "../components/PartnerBelt";
import DriverCard from "../components/Elements/DriverCard";
import Footer from "../components/Footer";

export default {
  name: "Drivers",
  components: { Navbar, TopParallax, PartnerBelt, DriverCard, Footer },
  data() {
    return {
      //Determines the layout of the DriverCard component
      //true == horizontal, false == vertical
      grid: false
    };
  },
  computed: {
    driversArray() {
      return this.$store.getters.drivers;
    }
  },
  mounted() {
    //Get the data from Vuex
    // this.drivers = this.$store.getters.drivers;
  }
};
</script>

<style lang="scss" scoped>
#drivers-row {
  margin-top: 3rem;
}
.Drivers {
  background: rgb(35, 35, 35);
  background: linear-gradient(
    90deg,
    rgba(35, 35, 35, 1) 5%,
    rgba(59, 58, 58, 1) 50%,
    rgba(35, 35, 35, 1) 95%
  );
}
</style>