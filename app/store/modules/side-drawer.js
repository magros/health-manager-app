const state = {
    // this toggles the sidedrawer
    sideDrawer: false,
    enableGestures: false
  }
  
  const mutations = {
    // always and only change vuex state through mutations.
    setSideDrawer (state, data) {
      state.sideDrawer = data
    },
    disableGestures(state) {
      state.enableGestures = false
    },
    enableGestures(state) {
      state.enableGestures = true
    }
  }

  const actions = {
    enableGestures({commit}) {
      commit('enableGestures')
    },
    disableGestures({commit}) {
      commit('disableGestures')
    },
    setSideDrawer({commit}, payload) {
      commit('setSideDrawer', payload)
    }
  }
  
  const getters = {
    // the 'sideDrawer' getter will be available to listen to on the front end.
    // this is the change that we're watching in /app/mixins/sideDrawer.js
    sideDrawer: (state) => state.sideDrawer
  }
  
  // export this module.
  export default {
    state,
    mutations,
    getters,
    actions
  }