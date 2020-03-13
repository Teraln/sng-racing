import Vue from "vue";
import Vuex from "vuex";
import API from "./API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drivers: [],
    partners: [],
    gallery: [],
    routes: [
      { title: "Home", route: "/" },
      { title: "Drivers", route: "/drivers" },
      { title: "Partners", route: "/partners" },
      { title: "Gallery", route: "/gallery" }
    ]

    //TODO Add db collections here
  },
  mutations: {
    setDrivers: (state, payload) => {
      state.drivers = payload;
    },
    setPartners: (state, payload) => {
      state.partners = payload;
    },
    setGallery: (state, payload) => {
      state.gallery = payload;
    }
  },
  actions: {
    fetchDrivers() {
      this.commit("setDrivers", API.getData("drivers"));
    },
    fetchPartners() {
      this.commit("setPartners", API.getData("partners"));
    },
    fetchGallery() {
      this.commit("setGallery", API.getData("gallery"));
    }
  },
  getters: {
    drivers: state => state.drivers,
    partners: state => state.partners,
    gallery: state => state.gallery,

    routes: state => state.routes
  }
});
