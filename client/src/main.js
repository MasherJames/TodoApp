import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import setAuthToken from "./services/setAuthToken";

const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
