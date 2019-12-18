<template>
  <div class="admin">
    <v-app id="Admin">
      <!-- NAV DRAWER -->
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list dense>
          <router-link to="/admin/drivers">
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-baby-carriage</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Drivers</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/admin/series">
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-car</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Series</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/admin/gallery">
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-image</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Gallery</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/admin/partners">
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Partners</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <!--TOP BAR-->
      <v-app-bar app clipped-left height="40">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>SNG Admin Panel</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>