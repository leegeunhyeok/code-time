import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    started: false,
    drawer: false,
    userData: {}
  },
  mutations: {
    START_TOGGLE (state) {
      state.started = !state.started
    },
    DRAWER_TOGGLE (state) {
      state.drawer = !state.drawer
    },
    LOAD_DONE (state) {
      state.loading = true
    }
  },
  actions: {
  }
})
