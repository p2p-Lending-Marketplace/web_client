import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    role: "",
    id: ""
  },
  mutations: {
    USER_LOGIN(state, payload) {
      state.isLogin = payload.isLogin;
      state.role = payload.role;
      state.id = payload.id;
    }
  },
  actions: {
    // adminLogin({ commit }, payload) {}
  },
  modules: {}
});
