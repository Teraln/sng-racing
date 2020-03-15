<template>
  <v-container class="DriverCard pb-4">
    <v-row>
      <!-- LEFT SIDE -->
      <v-col
        id="left-side-container"
        :cols="returnCardLayout(grid).cols[0]"
        :offset="returnCardLayout(grid).offset[0]"
      >
        <!-- Image -->
        <v-col id="driver-name-container" cols="8" offset="2">
          <h1 id="driver-name">{{ `${driver.name} ${driver.lastname}` }}</h1>
        </v-col>
        <!-- Name -->
        <v-col cols="10" offset="1">
          <v-img contain :src="driver.imageURL" max-height="300" class="my-4"></v-img>
        </v-col>
      </v-col>

      <!-- RIGHT SIDE -->
      <v-col
        id="right-side-container"
        :cols="returnCardLayout(grid).cols[1]"
        :offset="returnCardLayout(grid).offset[1]"
      >
        <v-col class="py-2 px-4" cols="12">
          <v-row>
            <v-col id="property" class="py-0" cols="3">Country:</v-col>
            <v-col id="info" class="py-0" cols="9">{{ driver.country }}</v-col>
          </v-row>
        </v-col>
        <v-col class="py-2 px-4" cols="12">
          <v-row>
            <v-col id="property" class="py-0" cols="3">Age:</v-col>
            <v-col id="info" class="py-0" cols="9">{{ getAge(driver) }}</v-col>
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
export default {
  name: "DriverCard",
  props: ["driver", "grid"],
  data() {
    return {};
  },

  methods: {
    getAge(e) {
      const ageDiffMs = Date.now() - new Date(`${e.year}-${e.month}-${e.day}`);
      const ageDate = new Date(ageDiffMs);

      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    returnCardLayout(prop) {
      let grid = [];
      if (prop) {
        //Lateral
        grid = { cols: [5, 4], offset: [1, 0] };
      } else {
        //Vertical
        grid = { cols: [12, 8], offset: [0, 2] };
      }
      return grid;
    },
  }
};
</script>

<style lang="scss" scoped>
.DriverCard {
  // background-color: rgba($color: $grey, $alpha: 0.5);
  & #left-side-container {
    & #driver-name-container {
      background-color: $primary;
      transform: skew(15deg, 0deg);
      z-index: 1;
      outline: solid 1px $lightGrey;
      outline-offset: 0.3rem;

      & #driver-name {
        text-align: center;
        transform: skew(-15deg, -0deg);
        font-size: $fHeader;
      }
    }
  }

  #right-side-container {
    background-color: $grey;
    outline: solid 1px $lightGrey;
    outline-offset: 0.3rem;
    //TODO Remove or add later
    // transform: skew(-3deg, 0deg);

    & #property {
      font-size: $fSmall;
      color: $primary;
      text-align: end;
      font-weight: 500;
      // transform: skew(3deg, 0deg);
    }
    & #info {
      font-size: $fSmall;
      font-weight: 300;
      // transform: skew(3deg, 0deg);
    }
  }
}

</style>
