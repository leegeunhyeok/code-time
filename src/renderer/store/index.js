import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    drawerOpen: false
  },
  mutations: {
    DRAWER_TOGGLE (state) {
      state.drawerOpen = !state.drawerOpen
    },
    LOAD_DONE (state) {
      state.loading = true
    }
  },
  actions: {
  }
})
