import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    role: "",
    id: "",
    company_name: "",
    logoURL: ""
  },
  mutations: {
    USER_LOGIN(state, payload) {
      state.isLogin = payload.isLogin;
      state.role = payload.role;
      state.id = payload.id;
      state.company_name = payload.company_name;
      state.logoURL = payload.logoURL;
    }
  },
  actions: {
    // adminLogin({ commit }, payload) {}
  },
  modules: {}
});
