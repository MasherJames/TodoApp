import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/views/Register";
import Login from "@/views/Login";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  { path: "/register", component: Register, name: "Register" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/", component: Home, name: "Home" }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
