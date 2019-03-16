import Vue from "vue";
import Axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import setAuthToken from "./services/setAuthToken";

Vue.prototype.$http = Axios;
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
