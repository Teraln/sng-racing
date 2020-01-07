<template>
  <div class="TopParallax">
    <v-parallax src="@/assets/1.jpg" alt="welcome-picture">
      <v-row align="center" justify="center">
        <v-col id="text-container" class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Singularity Racing</h1>
          <h4 class="subheading">A leading Sim-Racing E-Sports organisation</h4>
        </v-col>
      </v-row>

      <div id="shape-bottom"></div>
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

<style lang="scss" scoped>
.v-parallax {
  position: relative;
}
#text-container {
  & .display-1 {
    font-size: $fHeader;
    text-shadow: 1px 1px 1px $lightGrey !important;
  }
}

#shape-bottom {
  position: absolute;
  bottom: 0;
  background-color: $grey;
  height: 100%;
  width: 100%;
  clip-path: polygon(40% 96%, 42% 90%, 100% 100%, 0% 100%);
}
</style>