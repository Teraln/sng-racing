import Vue from 'vue'
import Vuex from 'vuex'
import Getter from './getter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drivers: []
  },
  getters: {
    allDrivers: state => state.drivers
  },
  actions: {
    fetchDrivers() {
      const response = Getter.getDrivers()
      this.commit('setDrivers', response)
      //TODO delet
      console.log(response)
    }
  },
  mutations: {
    setDrivers: (state, payload) => {
      state.drivers = payload
    }
  }
})
