<template>
  <v-container class="DriverCard">
    <v-col cols="4" offset="4" class="pb-2">
      <v-img :src="partner.imageURL" contain></v-img>
    </v-col>
    <v-col cols="8" offset="2" class="pa-5" id="text-div">
      <p min-height="200">{{ partner.text }}</p>
    </v-col>
    <v-col cols="4" offset="4" id="link-container" class="pb-5">
      <a :href="partner.link">
        <v-btn id="website-link" outlined>Website</v-btn>
      </a>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "PartnerCard",
  props: ["partner"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#text-div {
  border-top: solid 1px $primary;
  font-size: $fSmall;
  height: 200px;
}

#link-container {
  display: flex;
  justify-content: center;
  border-bottom: solid 1px $primary;

  #website-link {
    transition: background-color 0.5s;
    transition: color 0.5s;
    &:hover {
      background-color: $primary;
      color: $secondary;
    }
  }
}
</style>