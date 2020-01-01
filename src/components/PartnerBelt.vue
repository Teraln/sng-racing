<template>
  <div id="PartnerBelt">
    <v-container>
      <!--Swiper-->
      <v-card>
        <swiper :options="swiperOption">
          <swiper-slide v-for="i in tempArr" :key="i">
            <v-card>
              <v-img
                class="white--text align-end"
                height="120px"
                :src="`https://i.picsum.photos/id/23${i}/300/300.jpg`"
              ></v-img>
            </v-card>
          </swiper-slide>
        </swiper>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "PartnerBelt",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      //TODO delet
      //TODO will have to make a script that adds elements to the array to get rid of blanks?
      tempArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      swiperOption: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        loopedSlides: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: false,
        autoplay: {
          delay: 1000
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  background-color: $secondary;
}
</style>