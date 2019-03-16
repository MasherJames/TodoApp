import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(vuex);

export default new Vuex({
  state: {
    user: {},
    token: localStorage.getItem("token") || "",
    todo: {},
    todos: [],
    isLoggedIn: false,
    status: "",
    errors: []
  },
  mutations: {
    AUTH_REQUEST: state => {
      state.status = "loading";
    },
    REGISTER_SUCCESS: (state, user) => {
      state.status = "success";
      state.user = user;
    },
    LOGIN_SUCCESS: (state, token) => {
      state.status = "success";
      state.token = token;
    },
    FETCH_ERRORS: (state, errors) => {
      state.status = errors;
    },
    LOGOUT: state => {
      state.status = "";
      state.token = "";
    }
  },
  actions: {},
  getters: {}
});
