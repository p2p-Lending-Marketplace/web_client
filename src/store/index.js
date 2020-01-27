import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    USER_LOGIN(state, payload) {
      state.isLogin = payload;
    }
  },
  actions: {
    adminLogin({ commit }, payload) {}
  },
  modules: {}
});
