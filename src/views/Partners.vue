<template>
  <div class="Partners">
    <Navbar />
    <TopParallax />
    <v-container>
      <v-row justify="center">
        <v-col v-for="partner in partners" :key="partner.id" lg="4" md="6" sm="12">
          <PartnerCard :partner="partner" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import TopParallax from "../components/TopParallax";
import PartnerCard from "../components/Elements/PartnerCard";

import API from "../store/API";

export default {
  name: 'Partners',
  data() {
    return {
      partners: API.getData("partners")
    };
  },
  components: { Navbar, TopParallax, PartnerCard },
};
</script>

<style lang="scss" scoped>
</style>