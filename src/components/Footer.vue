<template>
  <div class="Footer secondary">
    <v-container>
      <v-footer dark padless>
        <v-card flat tile class="secondary text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              :href="icon.link"
              target="blank"
              class="mx-4 white--text"
              icon
              id="footer-link"
            >
              <v-icon id="footer-link-icon" size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text
            class="white--text pt-0"
          >Team Singularity is an expanding esports organization, with the purpose of developing successful teams, building a professional environment for the players and creating a thriving ecosystem.</v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} —
            <strong>Singularity Racing</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { icon: "mdi-facebook", link: "https://www.facebook.com/RacingSNG/" },
        { icon: "mdi-twitter", link: "https://twitter.com/RacingSNG" },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/sng_racing/?hl=en"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#footer-link {
  transition: background-color 0.5s;
  transition: color 0.5s;
  &:hover {
    background-color: $primary;
    color: $secondary;
  }
  #footer-link-icon {
    transition: background-color 0.5s;
    transition: color 0.5s;
    &:hover {
      background-color: $primary;
      color: $secondary;
    }
  }
}
</style>