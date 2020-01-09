<template>
  <div class="PartnerBelt">
    <v-container>
      <hooper :settings="hooperSettings">
        <slide v-for="partner in partners" :key="partner.id">
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
        transition: 600,
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
  mounted() {
    this.partners = this.$store.getters.partners;
  }
};
</script>

<style lang="scss" scoped>
.PartnerBelt {
  background-color: $secondary;
  & .hooper {
    outline: none;
    overflow: hidden;
    height: 6rem;
    & .hooper-slide {
      text-align: center;
      background-color: transparent;
      display: flex;
      justify-items: center;
      & img {
        margin: auto;
        align-self: center;
        height: auto;
        width: 12rem;
        pointer-events: none;
      }
    }
  }
}
</style>