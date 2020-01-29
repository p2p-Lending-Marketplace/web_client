import Vue from "vue";
import VueRouter from "vue-router";
import FormSign from "../views/FormSign.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FormLogin",
    component: FormSign,
    meta: {
      auth: false,
      title: "Finteur"
    }
  },
  {
    path: "/fintech",
    name: "Fintech",
    component: () =>
      import(/* webpackChunkName: "AdminDashboard" */ "../views/Fintech.vue"),
    meta: {
      auth: false,
      title: "Fintech | Fintech MarketPlace"
    },
    children: [
      {
        path: "add-fintech",
        name: "FintechForm",
        component: () =>
          import(
            /* webpackChunkName: "FintechForm" */ "../views/FintechForm.vue"
          ),
        meta: {
          auth: false,
          title: "Add-Fintech | Fintech MarketPlace"
        }
      },
      {
        path: ":id",
        name: "FintechFormId",
        component: () =>
          import(
            /* webpackChunkName: "FintechForm" */ "../views/FintechForm.vue"
          ),
        meta: {
          auth: false,
          title: "Edit-Fintech | Fintech MarketPlace"
        }
      }
    ]
  },
  {
    path: "/listuser",
    name: "ListUser",
    component: () =>
      import(/* webpackChunkName: "ListUser" */ "../views/ListUser.vue"),
    meta: {
      auth: false,
      title: "List User | Fintech MarketPlace"
    }
  },
  {
    path: "/listuser/:id",
    name: "DetailUser",
    component: () =>
      import(/* webpackChunkName: "DetailUser" */ "../views/DetailUser.vue"),
    meta: {
      auth: false,
      title: "Detail User | Fintech MarketPlace"
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
