<template>
  <div class="Gallery">
    <Navbar />
    <TopParallax />
    <PartnerBelt />
    <hooper :settings="hooperSettings" style="height: 400px">
      <slide></slide>

    </hooper>
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import TopParallax from "../components/TopParallax";
import PartnerBelt from "../components/PartnerBelt";

import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Gallery",
  components: { Navbar, TopParallax, PartnerBelt, Hooper, Slide },
  data() {
    return {
      hooperSettings: {
        centerMode: true,
        itemsToShow: 1.5,
        vertical: true,
        infiniteScroll: true,
        wheelControl: true,
        transition: 400
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.Gallery {
  background: rgb(35, 35, 35);
  background: linear-gradient(
    90deg,
    rgba(35, 35, 35, 1) 5%,
    rgba(59, 58, 58, 1) 50%,
    rgba(35, 35, 35, 1) 95%
  );
}
</style>