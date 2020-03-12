<template>
  <div class="Navbar">
    <v-container>
      <v-toolbar id="toolbar" color="secondary" height="50">
        <v-toolbar-title id="toolbar-title">Singularity Racing</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.breakpoint.smAndUp">
          <v-toolbar-items v-for="item in menu" :key="item.title">
            <v-btn id="link" class="mx-2 px-4 py-0" small text :to="item.route">{{ item.title }}</v-btn>
          </v-toolbar-items>
        </template>
        <!-- TODO add burger menu -->
        <template v-else>
          <BurgerMenu />
        </template>
      </v-toolbar>
    </v-container>
  </div>
</template>

<script>
import BurgerMenu from "./Elements/BurgerMenu";

export default {
  name: "Navbar",
  components: { BurgerMenu },
  data() {
    return {
      //Routes (Views)
      menu: [
        { title: "Home", route: "/" },
        { title: "Drivers", route: "/drivers" },
        { title: "Partners", route: "/partners" },
        { title: "Gallery", route: "/gallery" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.Navbar {
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