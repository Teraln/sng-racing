import Vue from 'vue'
import Vuex from 'vuex'
import Getter from './getter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drivers: []
  },
  actions: {
    fetchDrivers() {
      const response = Getter.getDrivers()
      this.commit('setDrivers', response)
      //TODO delet
      console.log(response)
    }
  },
  getters: {
    allDrivers: state => state.drivers,
    specificDriver: (state, name) => state.drivers[name]
  },
  mutations: {
    setDrivers: (state, payload) => {
      state.drivers = payload
    }
  }
})
