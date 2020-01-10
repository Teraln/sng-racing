<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes['dark'].background}">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  created() {
    this.$store.dispatch("fetchPartners");
    this.$store.dispatch("fetchDrivers");
    this.$store.dispatch("fetchGallery");
  }
};
</script>

<style lang="scss">
html {
  /*TODO Will adjust this to scale to other screens*/
  font-size: 16px !important;
  font-family: "Ubuntu", sans-serif;
}

#main {
  font-family: $mainFont;
}
</style>
