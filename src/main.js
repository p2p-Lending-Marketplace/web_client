import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Snotify from "vue-snotify";
import "vue-snotify/styles/material.css";
import { createProvider } from "./vue-apollo";

Vue.use(Snotify);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
