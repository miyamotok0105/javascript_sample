
import makeRandStr from '../../lib/str'

const state = {
  step: 1,
  countNumber: 0,
  countString: "hoge"
}

const getters = {
  step: state => state.step,
  countNumber: state => state.countNumber,
  countString: state => state.countString,
}

const actions = {
  incrementNumber({ commit }) {
    commit('incrementNumber')
  },
  incrementString({ commit }) {
    commit('incrementString')
  }
}

const mutations = {
  incrementNumber (state) {
    state.countNumber += state.step
  },
  incrementString (state) {
    state.countString += makeRandStr(state.step)
    // state.countString += "A"
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}