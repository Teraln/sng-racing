<template>
  <div class="Navbar">
    <v-container>

    <v-toolbar id="toolbar" color="secondary" height="50">
      <v-toolbar-title>Singularity Racing</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-toolbar-items v-for="item in menu" :key="item.title">
          <v-btn id="link" text small :to="item.route">{{ item.title }}</v-btn>
        </v-toolbar-items>
      </template>
      <template v-else></template>
    </v-toolbar>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      //Routes (Views)
      menu: [
        { title: "Home", route: "/" },
        { title: "Drivers", route: "/drivers" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#toolbar {
  background-color: red;
}
#link {
  transition: background-color 0.5s;
  &:hover {
    background-color: $primary;
    color: $secondary;
  }
}
</style>