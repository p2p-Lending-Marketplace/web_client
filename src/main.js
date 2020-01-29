import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Snotify from "vue-snotify";
import "vue-snotify/styles/material.css";
import { createProvider } from "./vue-apollo";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";

Vue.use(VueMaterial);
Vue.use(Snotify);
Vue.use(Viewer);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
