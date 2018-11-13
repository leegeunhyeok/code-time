import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    started: false,
    drawer: false,
    data: {}
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
    },
    SET_DATA (state, data) {
      state.data = data
    },
    TIME_INCRESE (state) {
      if (state['data'] && state.data['total'] !== undefined) {
        state.data['total']++
      }
    }
  },
  actions: {
  }
})
