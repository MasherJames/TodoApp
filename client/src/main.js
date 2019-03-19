import Vue from "vue";
import jwtDecode from "jwt-decode";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import setAuthToken from "./services/setAuthToken";

const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
  const decoded = jwtDecode(token);
  // current time exceeds time in session, user should be logged out
  if (decoded.exp < Date.now() / 1000) {
    store.dispatch("logout").then(() => router.push("/login"));
  }
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
