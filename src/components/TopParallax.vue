<template>
  <div class="TopParallax">
    <v-parallax src="@/assets/1.jpg" alt="welcome-picture">
      <v-row align="center" justify="center">
        <v-col id="text-container" class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Singularity Racing</h1>
          <h4 class="subheading">A leading Sim-Racing E-Sports organisation</h4>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "TopParallax",

  data() {
    return {};
  }
};
</script>

<style lang="scss">
.TopParallax {
  .v-parallax {
    position: relative;
    & .v-parallax__image {
      opacity: 0.7 !important;
      bottom: 5rem;
    }
  }
  & #text-container {
    & .display-1 {
      font-size: $fHeader;
      text-shadow: 1px 1px 1px $lightGrey !important;
    }
  }
}
</style>