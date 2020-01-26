import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    meta: {
      auth: false,
      title: "Fintech MarketPlace"
    }
  },
  {
    path: "/signin",
    name: "FormLogin",
    component: () =>
      import(/* webpackChunkName: "FormSign" */ "../views/Form.vue"),
    meta: {
      auth: false,
      title: "SignIn | Fintech MarketPlace"
    }
  },
  {
    path: "/admin",
    name: "AdminDashboard",
    component: () =>
      import(
        /* webpackChunkName: "AdminDashboard" */ "../views/AdminDashboard.vue"
      ),
    meta: {
      auth: false,
      title: "Admin Page | Fintech MarketPlace"
    }
  },
  {
    path: "/add-fintech",
    name: "AddFintech",
    component: () =>
      import(/* webpackChunkName: "AddFintech" */ "../views/AddFintech.vue"),
    meta: {
      auth: false,
      title: "Add-Fintech | Fintech MarketPlace"
    }
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
