import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  username: '',
  docList: [],
  nowdoc: null
}
const mutations = {
  login: (state, username) => {
    state.username = username
  },
  logout: (state) => {
    state.username = ''
  },
  initDocList: (state, docList) => {
    state.docList = docList
  },
  selectDoc: (state, nowdoc) => {
    state.nowdoc = nowdoc
  }
}
const actions = {}
const getters = {
  nowDocMarks: (state) => {
    let marks = ''
    state.docList.forEach((firstItem) => {
      firstItem.children.forEach((secondItem) => {
        if (state.nowdoc && state.nowdoc.id === secondItem.id) {
          marks = secondItem.mark_key
        }
      })
    })
    return marks
  }
}

export default new Vuex.Store({
  state, mutations, actions, getters
})
