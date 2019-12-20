<template>
  <div id="PartnerBelt">
    <v-container>
      <!--Swiper-->
      <v-card>
        <swiper :options="swiperOption">
          <swiper-slide>
            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                src="http://cdn.eso.org/images/screen/eso1907a.jpg"
              ></v-img>
            </v-card>
          </swiper-slide>

          <swiper-slide>
            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                src="http://cdn.eso.org/images/screen/eso1907a.jpg"
              ></v-img>
            </v-card>
          </swiper-slide>

          <swiper-slide>
            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                src="http://cdn.eso.org/images/screen/eso1907a.jpg"
              ></v-img>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                src="http://cdn.eso.org/images/screen/eso1907a.jpg"
              ></v-img>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                src="http://cdn.eso.org/images/screen/eso1907a.jpg"
              ></v-img>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                src="http://cdn.eso.org/images/screen/eso1907a.jpg"
              ></v-img>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                src="http://cdn.eso.org/images/screen/eso1907a.jpg"
              ></v-img>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card>
              <v-img
                class="white--text align-end"
                height="200px"
                src="http://cdn.eso.org/images/screen/eso1907a.jpg"
              ></v-img>
            </v-card>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
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
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper-button-prev {
  color: $primary;
}
</style>