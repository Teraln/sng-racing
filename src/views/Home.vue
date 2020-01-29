<template>
  <div class="Home">
    <Navbar />
    <TopParallax />
    <PartnerBelt />
    <v-container class="home-drivers-container">
      <v-row justify="center" align="center">
        <v-col lg="10" md="12" sm="12" xs="12">
          <!-- <h1 id="gallery-title">Gallery</h1> -->

          <!-- Hooper -->
          <div class="home-hooper-container">
            <!-- Control Buttons -->
            <v-btn
              id="control-btn-next"
              @click="slideNext()"
              x-large
              text
              icon
              color="primary"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            <v-btn
              id="control-btn-prev"
              @click="slidePrev()"
              x-large
              text
              icon
              color="primary"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

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
        centerMode: true,
      }
    };
  },
  methods: {
    gridSwitch() {
      this.grid = window.innerWidth > 960;
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    }
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.gridSwitch, { passive: true });
    }
  },
  mounted() {
    this.drivers = this.$store.getters.drivers;
    this.gridSwitch();
    window.addEventListener("resize", this.gridSwitch, { passive: true });
  }
};
</script>

<style lang="scss">
.Home {
  background: rgb(35, 35, 35);
  background: linear-gradient(
    90deg,
    rgba(35, 35, 35, 1) 5%,
    rgba(59, 58, 58, 1) 50%,
    rgba(35, 35, 35, 1) 95%
  );
  & .home-drivers-container {
    height: 100vh;
    & .home-hooper-container {
      position: relative;
      & #home-driver-hooper {
        height: 100%;
      }
      & #control-btn-next {
        position: absolute;
        right: 1rem;
        top: 25%;
        z-index: 2;
      }
      & #control-btn-prev {
        position: absolute;
        left: 1rem;
        top: 25%;
        z-index: 2;
      }
    }
  }
}
</style>
