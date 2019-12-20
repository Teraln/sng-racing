<template>
  <v-app id="main" :style="{background: $vuetify.theme.themes['dark'].background}">
    <router-view />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  data: () => ({}),
  computed: {},
  methods: {
    ...mapActions(["fetchDrivers"])
  },
  created() {
    this.fetchDrivers();
  }
};
</script>

<style lang="scss">
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
