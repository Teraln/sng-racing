<template>
  <v-container class="DriverCard">

    <v-row>
      <!-- LEFT SIDE -->
      <!-- TODO Vertical on drivers page, horizontal on homepage -->
      <v-col id="left-side-container" cols="12">
        <!-- Image -->
        <v-col id="driver-name-container" cols="8" offset="2">
          <h1 id="driver-name">{{ `${driver.name} ${driver.lastname}` }}</h1>
        </v-col>
        <!-- Name -->
        <v-col cols="10" offset="1">
          <v-img :src="driver.imageURL" max-height="300" class="my-4"></v-img>
        </v-col>
      </v-col>

      <!-- RIGHT SIDE -->
      <!-- TODO Vertical on drivers page, horizontal on homepage -->
      <v-col id="right-side-container" cols="10" offset="1">
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
            <v-col id="property" class="py-0" cols="3">Series:</v-col>
            <v-col id="info" class="py-0" cols="9">{{ driver.series }}</v-col>
          </v-row>
        </v-col>
        <v-col class="py-2 px-4" cols="12">
          <!-- TODO temp -->
          <v-row>
            <v-col id="property" class="py-0" cols="3">Titles:</v-col>
            <v-col
              id="info"
              class="py-0"
              cols="9"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id exercitationem aliquid tempora maiores sunt laudantium? Quos rem officia nobis. Beatae, consequuntur. Dolore odio voluptatibus cupiditate dignissimos voluptas rerum! Placeat, accusamus.</v-col>
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
#left-side-container {
  & #driver-name-container {
    background-color: $primary;
    transform: skew(15deg, 0deg);
    z-index: 1;
    outline: solid 1px $lightGrey;
    outline-offset: 0.2rem;

    & #driver-name {
      text-align: center;
      transform: skew(-15deg, -0deg);
      font-size: $fHeader;
    }
  }
}

#right-side-container {
  transform: skew(-3deg, 0deg);
  background-color: $lightGrey;
  outline: solid 1px $primary;
  outline-offset: 0.2rem;

  & #property {
    font-size: $fSmall;
    color: $primary;
    text-align: end;
    font-weight: 500;
    transform: skew(3deg, 0deg);
  }
  & #info {
    font-size: $fSmall;
    font-weight: 300;
    transform: skew(3deg, 0deg);
  }
}
</style>
