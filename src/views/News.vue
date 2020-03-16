<template>
  <div class="News">
    <Navbar />
    <TopParallax />
    <PartnerBelt />
    <v-container>
      <v-row justify="center"></v-row>
    </v-container>
    <Footer />
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import TopParallax from "../components/TopParallax";
import PartnerBelt from "../components/PartnerBelt";
import Footer from "../components/Footer";

export default {
  name: "News",
  components: { Navbar, TopParallax, PartnerBelt, Footer },
  data() {
    return {};
  },
  computed: {
    newsArray() {
      return this.$store.getters.news;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>