import { createStore } from "vuex";

export default createStore({
  state: {
    authType: 'auth',
    user: {},
    isLoggedIn: false,
  },
  mutations: {
    setAuthType (state, authType) {
      state.authType = authType
      console.log(state.authType)
    },
    setUser (state, user) {
      state.user = user
    
    },
    setLoggedIn(state, isLoggedIn){
      state.isLoggedIn = isLoggedIn
      console.log(state.isLoggedIn)
    }
  },
  actions: {},
  modules: {},
  getters: {
    getAuthType: state => state.authType,
    getUser : state => state.user,
    getIsLoggedIn: state => state.isLoggedIn
  },
});
