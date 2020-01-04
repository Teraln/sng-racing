<template>
  <v-container class="DriverCard">
    <v-row>
      <v-col cols="6">
        <v-img
          src="https://bilder.t-online.de/b/85/67/15/44/id_85671544/610/tid_da/ayrton-senna-im-overall-seines-damaligen-teams-williams-renault-.jpg"
        ></v-img>
      </v-col>
      <v-col cols="6">
        <v-list-item>
          <v-list-item-content>
            <li id="driver-info">
              <span class="mr-4" id="property">Country:</span>
              <span id="info">Netherlands</span>
            </li>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DriverCard",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#driver-info {
  color: $accent;
  font-size: $fText;
  & #property {
    font-weight: bold;
  }
  & #info {
    font-weight: normal;
  }
}
</style>
