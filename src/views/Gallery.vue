<template>
  <div class="Gallery">
    <Navbar />
    <v-btn @click="smoothScroll" text>button</v-btn>
    <TopParallax />
    <PartnerBelt />
    <v-container class="gallery-container">
      <!-- <h1 id="gallery-title">Gallery</h1> -->


      <!-- Control Buttons -->
      <!-- <v-btn id="control-btn-next" @click="slideNext" text x-large icon color="primary">
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
      <v-btn id="control-btn-prev" @click="slidePrev" text x-large icon color="primary">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>-->

      
      <!-- Hooper -->
      <hooper id="gallery-hooper" :settings="hooperSettings" ref="carousel">
        <!-- Slides -->
        <slide id="gallery-slide" v-for="(item, index) in gallery" :key="index" :index="index">
          <v-img id="item-image" :src="item.imageURL" :alt="item.title" contain>
            <div id="item-title-container">
              <h5 id="item-title">{{item.title}}</h5>
            </div>
          </v-img>
        </slide>
        <hooper-progress slot="hooper-addons"></hooper-progress>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </v-container>
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import TopParallax from "../components/TopParallax";
import PartnerBelt from "../components/PartnerBelt";

import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Progress as HooperProgress
} from "hooper";

import "hooper/dist/hooper.css";

export default {
  name: "Gallery",
  components: {
    Navbar,
    TopParallax,
    PartnerBelt,
    Hooper,
    Slide,
    HooperPagination,
    HooperProgress
  },
  data() {
    return {
      gallery: [],
      hooperSettings: {
        vertical: true,
        itemsToShow: 1,
        infiniteScroll: true,
        transition: 600,
        wheelControl: false,
        mouseDrag: false,
        touchDrag: false,
        keysControl: true
      }
    };
  },
  methods: {
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    //TODO Maybe something for later
    smoothScroll() {
      const galleryView = document.querySelector("#gallery-hooper");

      galleryView.scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.gallery = this.$store.getters.gallery;
  }
};
</script>

<style lang="scss">
.Gallery {
  background: rgb(35, 35, 35);
  background: linear-gradient(
    90deg,
    rgba(35, 35, 35, 1) 5%,
    rgba(59, 58, 58, 1) 50%,
    rgba(35, 35, 35, 1) 95%
  );
  //Component wrapper
  & .gallery-container {
    //Title
    & #gallery-title {
      text-align: center;
      margin: 3rem 0 4rem 0;
      font-weight: 300;
    }
    //The hooper component
    & #gallery-hooper {
      outline: none;
      background-color: rgba($color: $lightGrey, $alpha: 0.2);
      height: 80vh;
      margin: 10% 0 10% 0;
      //Image element
      & #item-image {
        overflow: hidden;
        position: relative;
        max-width: 100%;
        max-height: 90%;
        //Item title container
        & #item-title-container {
          position: absolute;
          transform: skew(15deg, 0deg);
          max-width: 70%;
          top: 5%;
          left: 5%;
          background: rgba($color: $lightGrey, $alpha: 0.7);
          //Item title
          & #item-title {
            transform: skew(-15deg, -0deg);
            padding: 0.1rem 1rem 0.1rem 1rem;
            color: $accent;
            font-size: $fText;
            font-weight: 300;
          }
        }
      }
      & .hooper-progress-inner {
        background-color: $primary;
      }
      & .hooper-slide {
        display: inherit;
        align-items: center;
      }
      & .hooper-indicator.is-active {
        background-color: $primary;
      }
    }
  }
}
</style>