<template>
  <v-container class="DriverCard">
    <v-row justify="center">
      <v-col cols="12">
        <v-img :src="partner.imageURL"></v-img>
      </v-col>
      <v-col cols="12">
        <p>{{ partner.text }}</p>
      </v-col>
      <a :href="partner.link">
        <v-btn id="website-link" outlined>Website</v-btn>
      </a>
    </v-row>
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