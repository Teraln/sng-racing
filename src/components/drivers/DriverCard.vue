<template>
  <v-container class="DriverCard">
    <v-row>
      <v-col cols="12" md="5">
        <v-img :src="driver.imageURL" max-height="300"></v-img>
      </v-col>
      <v-col cols="12" md="7">
        <v-col class="py-2 px-4" cols="12">
          <v-row>
            <v-col id="property" class="py-0" cols="3">Country:</v-col>
            <v-col id="info" class="py-0" cols="9">{{ driver.country }}</v-col>
          </v-row>
        </v-col>
        <v-col class="py-2 px-4" cols="12">
          <v-row>
            <v-col id="property" class="py-0" cols="3">Age:</v-col>
            <!-- TODO temp -->
            <v-col id="info" class="py-0" cols="9">{{ driver.day }}</v-col>
          </v-row>
        </v-col>
        <v-col class="py-2 px-4" cols="12">
          <v-row>
            <v-col id="property" class="py-0" cols="3">Role:</v-col>
            <v-col id="info" class="py-0" cols="9">{{ driver.role }}</v-col>
          </v-row>
        </v-col>
        <v-col class="py-2 px-4" cols="12">
          <v-row>
            <v-col id="property" class="py-0" cols="3">Country:</v-col>
            <v-col id="info" class="py-0" cols="9">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum aut quisquam quae magnam, sequi nobis doloribus obcaecati alias iusto provident consectetur amet voluptates nulla. Aut commodi saepe alias cupiditate!</v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "../../store/API";

export default {
  name: "DriverCard",
  props: ["driver"],
  data() {
    return {};
  },
  methods: {
    getAge(e) {
      //Birthdate
      const unixBirth = API.dateToUnix(e.year, e.month, e.day);
      console.log(unixBirth);

      //Today
      const today = new Date();
      const unixToday = Date.parse(today);
      console.log(unixToday);

      //Age
      // const age = unixToday - unixBirth
    }
  }
};
</script>

<style lang="scss" scoped>
#property {
  font-size: $fText;
  text-align: end;
}
#info {
  font-size: $fText;
}
</style>
