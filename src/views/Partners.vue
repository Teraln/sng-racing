<template>
  <div class="Partners">
    <Navbar />
    <!-- <TopParallax /> -->
    <v-container>
      <v-row justify="center">
        <v-col v-for="partner in partners" :key="partner.id" lg="4" md="6" sm="12">
          <PartnerCard :partner="partner" />
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
// import TopParallax from "../components/TopParallax";
import PartnerCard from "../components/Elements/PartnerCard";
import Footer from "../components/Footer";

export default {
  name: "Partners",
  components: { Navbar, PartnerCard, Footer },
  data() {
    return {
      partners: []
    };
  },
  mounted() {
    //Get the data from Vuex
    this.partners = this.$store.getters.partners;
  }
};
</script>

<style lang="scss" scoped>
</style>