<template>
  <div class="Gallery">
    <Navbar />
    <TopParallax />
    <PartnerBelt />
    <div class="gallery-container">
      <!-- <h1 id="gallery-title">Gallery</h1> -->

      <!-- Hooper -->
      <div class="hooper-container">
        <!-- Control Buttons -->
        <v-btn
          id="control-btn-next"
          @click="slideNext(); smoothScroll();"
          text
          icon
          large
          color="primary"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn id="control-btn-prev" @click="slidePrev(); smoothScroll()" text icon large color="primary">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <hooper id="gallery-hooper" :settings="hooperSettings" ref="carousel">
          <!-- Slides -->
          <slide
            id="gallery-slide"
            v-for="(item, index) in galleryData"
            :key="index"
            :index="index"
          >
            <div id="item-title-container">
              <h5 id="item-title">{{item.title}}</h5>
            </div>
            <v-img id="item-image" :src="item.imageURL" :alt="item.title" contain></v-img>
          </slide>
          <hooper-progress slot="hooper-addons"></hooper-progress>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import TopParallax from "../components/TopParallax";
import PartnerBelt from "../components/PartnerBelt";
import Footer from "../components/Footer";

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
    HooperProgress,
    Footer
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        infiniteScroll: true,
        transition: 300,
        wheelControl: false,
        mouseDrag: true,
        touchDrag: true,
        keysControl: true
      }
    };
  },
  computed: {
    galleryData() {
      return this.$store.getters.gallery;
    }
  },
  methods: {
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    smoothScroll() {
      const galleryView = document.querySelector("#gallery-hooper");

      galleryView.scrollIntoView({
        behavior: "smooth"
      });
    }
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
    height: 100vh;
    padding-left: 0;
    padding-right: 0;
    //Title
    & #gallery-title {
      text-align: center;
      margin: 3rem 0 4rem 0;
      font-weight: 300;
    }
    //Hooper Container
    & .hooper-container {
      height: 100%;
      position: relative;
      & #control-btn-next {
        position: absolute;
        top: 50%;
        right: 0;
        z-index: 3;
      }
      & #control-btn-prev {
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 3;
      }

      //The hooper component
      & #gallery-hooper {
        outline: none;
        border-bottom: 1px $primary solid;
        height: 100%;
        //Image element
        & .hooper-track {
          padding-left: 0;
        }
        & #gallery-slide {
          position: relative;
          //Item title container
          & #item-title-container {
            position: absolute;
            transform: skew(15deg, 0deg);
            max-width: 70%;
            bottom: 2rem;
            left: 1rem;
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

          & #item-image {
            overflow: hidden;
            max-width: 100%;
            max-height: 90%;
          }
        }
        & .hooper-progress {
          background-color: $grey;
        & .hooper-progress-inner {
          background-color: $primary;
        }
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
}
.hooper-indicators {
  padding-left: 0;
}
</style>