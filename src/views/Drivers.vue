<template>
  <div class="Drivers">
    <Navbar />
    <TopParallax />
    <PartnerBelt />

  </div>
</template>


<script>
import Navbar from '../components/Navbar'
import TopParallax from '../components/TopParallax'
import PartnerBelt from '../components/PartnerBelt'

export default {
  name: 'Drivers',
components: {Navbar, TopParallax, PartnerBelt},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>