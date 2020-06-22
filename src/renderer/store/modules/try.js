const state = {
    countA: 1
  }
  
  const mutations = {
    onHandleEdit(state) {
      state.countA ++
    },
    reduce(state) {
      state.countA --
    }
  }
  
  const actions = {
    onHandleEdit:({commit}) => {
      commit('add')
    },
    reduce:({commit}) => {
      commit('reduce')
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }