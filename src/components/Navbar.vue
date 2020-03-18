<template>
  <div class="Navbar">
    <v-container v-if="$vuetify.breakpoint.smAndUp">
      <v-toolbar id="toolbar" color="secondary" height="50">
        <v-toolbar-title id="toolbar-title">Singularity Racing</v-toolbar-title>

        <v-spacer></v-spacer>

        <template>
          <v-toolbar-items v-for="item in menu" :key="item.title">
            <v-btn id="link" class="mx-2 px-4 py-0" small text :to="item.route">{{ item.title }}</v-btn>
          </v-toolbar-items>
        </template>
      </v-toolbar>
    </v-container>

    <template v-else>
      <MenuDrawer />
    </template>
  </div>
</template>

<script>
import MenuDrawer from "./Elements/MenuDrawer";

export default {
  name: "Navbar",
  components: { MenuDrawer },
  data() {
    return {
      //Routes (Views)
      menu: this.$store.getters.routes
    };
  }
};
</script>

<style lang="scss" scoped>
.Navbar {
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: $secondary;
  & #toolbar-title {
    font-weight: 300;
  }
}
#link {
  transition: background-color 0.4s;
  transition: border-radius 0.4s;
  border-radius: 1rem;
  font-weight: 300;

  &:hover {
    background-color: $primary;
    color: $secondary;
    border-radius: 2rem;
  }
}
</style>