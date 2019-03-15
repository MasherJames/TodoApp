import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/views/Register";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  { path: "/register", component: Register, name: "Register" },
  { path: "/", component: Home, name: "Home" }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
