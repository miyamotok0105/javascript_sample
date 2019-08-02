import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/counter'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    counter
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
