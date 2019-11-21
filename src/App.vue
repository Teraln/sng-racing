<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  data: () => ({}),
  computed: {},
  methods: {
    ...mapActions(['fetchDrivers'])
  },
  created() {
    this.fetchDrivers();
  }
};
</script>
