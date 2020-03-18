<template>
  <div class="PartnerBelt">
    <v-container>
      <hooper :settings="hooperSettings">
        <slide v-for="(partner,index) in getPartnerImages" :key="index" :index="index">
          <img :src="partner.imageURL" :alt="partner.name" draggable="false" />
        </slide>
      </hooper>
    </v-container>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "PartnerBelt",
  components: { Hooper, Slide },
  data() {
    return {
      partners: [],
      hooperSettings: {
        itemsToShow: 1,
        itemsToSlide: 1,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 2000,
        wheelControl: false,
        transition: 200,
        breakpoints: {
          1264: {
            itemsToShow: 3
          },
          960: {
            itemsToShow: 2
          }
        }
      }
    };
  },
  computed: {
    getPartnerImages() {
      return this.$store.getters.partners;
    }
  }
};
</script>

<style lang="scss">
.PartnerBelt {
  background-color: $secondary;
  & .hooper {
    outline: none;
    height: 6rem;
    & .hooper-track {
      padding-left: 0;
    }
    & .hooper-slide {
      background-color: transparent;
      display: grid;
      & img {
        justify-self: center;
        align-self: center;
        display: inherit;
        height: auto;
        width: 12rem;
        pointer-events: none;
      }
    }
  }
}
</style>