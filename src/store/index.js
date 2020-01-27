import Vue from "vue";
import Vuex from "vuex";
import ADD_FINTECH from "../graphql/addFintech.gql";

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
    // addFintech({ dispatch }) {
    //   return new Promise((resolve, reject) => {
    //   });
    // },
    //   asyncuploadImage({}) {
    //     return new Promise((resolve,reject)=> {
    //       let formData = new FormData();
    //       formData.append("image", this.files[0]);
    //       const { data } = await this.$apollo.mutate({
    //         mutation: UPLOAD_IMAGE,
    //         variables: {
    //           file: this.files[0]
    //         }
    //       });
    //       resolve(data)
    //     })
    //   }
  },
  modules: {}
});
