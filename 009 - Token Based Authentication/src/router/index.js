import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from '../views/Dashboard.vue';
import RegisterUser from '../views/RegisterUser.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component: Dashboard,
  },
  {
    path:'/register',
    name:'register',
    component:RegisterUser,
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
