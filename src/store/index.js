import Vue from 'vue'
import Vuex from 'vuex'
import API from './API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drivers: [],
    partners: [],

    //TODO Add db collections here

  },
  mutations: {
    setDrivers: (state, payload) => {
      state.drivers = payload
    },
    setPartners: (state, payload) => {
      state.partners = payload
    }
  },
  actions: {
    fetchDrivers() {
      this.commit('setDrivers', API.getData('drivers'))
    },
    fetchPartners() {
      this.commit('setPartners', API.getData('partners'))
    },
  },
  getters: {
    drivers: state => state.drivers,
    partners: state => state.partners,
  }
})
