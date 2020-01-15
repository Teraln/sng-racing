<template>
  <div class="home">
    <Navbar />
    <TopParallax />
    <PartnerBelt />
    <v-container class="home-drivers-container">
      <!-- <h1 id="gallery-title">Gallery</h1> -->

      <!-- Hooper -->
      <div class="hooper-container">
        <!-- Control Buttons -->
        <!-- <v-btn
          id="control-btn-next"
          @click="slideNext(); smoothScroll();"
          text
          icon
          color="primary"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn id="control-btn-prev" @click="slidePrev(); smoothScroll()" text icon color="primary">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>-->

        <hooper id="home-driver-hooper" :settings="hooperSettings" ref="carousel">
          <!-- Slides -->
          <slide
            id="home-driver-slide"
            v-for="(driver, index) in drivers"
            :key="index"
            :index="index"
          >
            <DriverCard :driver="driver" :grid="grid" />
          </slide>
        </hooper>
      </div>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import TopParallax from "../components/TopParallax";
import PartnerBelt from "../components/PartnerBelt";
import DriverCard from "../components/Elements/DriverCard";

import { Hooper, Slide } from "hooper";

export default {
  name: "Home",
  components: { Navbar, TopParallax, PartnerBelt, DriverCard, Hooper, Slide },
  data() {
    return {
      drivers: [],
      grid: true,
      hooperSettings: {
        itemsToShow: 1,
        infiniteScroll: true,
        transition: 300,
        wheelControl: false,
        mouseDrag: true,
        touchDrag: false,
        keysControl: true,
      }
    };
  },
  mounted() {
    this.drivers = this.$store.getters.drivers;
  }
};
</script>

<style lang="scss">
  
</style>
