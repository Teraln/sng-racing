<template>
  <div class="MenuDrawer">
    <!-- NAV DRAWER -->
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      right
      color="secondary"
      width="auto"
      height="auto"
      bottom
    >
      <v-list>
        <router-link v-for="route in menu" :key="route.title" :to="route.route">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>{{route.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <!--TOP BAR-->
    <v-app-bar app clipped-right height="60" color="secondary">
      <v-toolbar-title>Singularity Racing</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      menu: this.$store.getters.routes
    };
  }
};
</script>

<style lang="scss" scoped>
</style>