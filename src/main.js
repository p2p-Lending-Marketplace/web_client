import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Snotify from "vue-snotify";
import "vue-snotify/styles/material.css";
import { createProvider } from "./vue-apollo";
import ImageMagnifier from "vue-image-magnifier";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);
Vue.use(Snotify);
Vue.use(ImageMagnifier);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
