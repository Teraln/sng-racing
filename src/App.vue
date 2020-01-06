<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes['dark'].background}">
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: "App",
  data: () => ({}),
};
</script>

<style lang="scss">
html {

  /*TODO Will adjust this to scale to other screens*/
  font-size: 16px !important;
}
@font-face {
  font-family: 'Ubuntu', sans-serif;
  src: url('./assets/fonts/Ubuntu-Medium.ttf') format('truetype');
  src: url('./assets/fonts/Ubuntu-Light.ttf') format('truetype');
  
}
#main {
  font-family: $mainFont;
}
</style>
