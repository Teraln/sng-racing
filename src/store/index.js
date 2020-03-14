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
      API.getData("drivers").then(data => {
        this.commit("setDrivers", data);
      });
    },
    fetchPartners() {
      API.getData("partners").then(data => {
        this.commit("setPartners", data);
      });
    },
    fetchGallery() {
      API.getData("gallery").then(data => {
        this.commit("setGallery", data);
      });
    }
  },
  getters: {
    drivers: state => state.drivers,
    partners: state => state.partners,
    gallery: state => state.gallery,

    routes: state => state.routes
  }
});
