<template>
  <div class="Gallery">
    <Navbar />
    <TopParallax />
    <PartnerBelt />
    <v-container>
      <hooper id="gallery-hooper" :settings="hooperSettings">
        <slide v-for="(item, index) in gallery" :key="index" :index="index">
          <v-img :src="item.imageURL" :alt="item.title"></v-img>
          <h1>{{item.title}}</h1>
        </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </v-container>
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import TopParallax from "../components/TopParallax";
import PartnerBelt from "../components/PartnerBelt";

import { Hooper, Slide, Pagination as HooperPagination } from "hooper";

import "hooper/dist/hooper.css";

export default {
  name: "Gallery",
  components: {
    Navbar,
    TopParallax,
    PartnerBelt,
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      gallery: [],
      hooperSettings: {
        centerMode: true,
        itemsToShow: 1.2,
        vertical: true,
        infiniteScroll: true,
        wheelControl: true,
        transition: 400
      }
    };
  },
  mounted() {
    this.gallery = this.$store.getters.gallery;
  }
};
</script>

<style lang="scss" scoped>
.Gallery {
  background: rgb(35, 35, 35);
  background: linear-gradient(
    90deg,
    rgba(35, 35, 35, 1) 5%,
    rgba(59, 58, 58, 1) 50%,
    rgba(35, 35, 35, 1) 95%
  );
  & #gallery-hooper {
    height: 50vh;
  }
}
</style>