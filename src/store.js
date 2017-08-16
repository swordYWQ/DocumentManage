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
  nowproject: (state) => {
    let res = null
    if (state.nowdoc) {
      for (let i = 0; i < state.docList.length; i++) {
        for (let j = 0; j < state.docList[i].children.length; j++) {
          if (state.docList[i].children[j].id === state.nowdoc.id) {
            res = state.docList[i]
          }
        }
      }
    }
    return res
  },
  nowdoc: (state) => state.nowdoc,
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
