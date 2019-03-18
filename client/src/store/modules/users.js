import MakeRequests from "../../services/requests";
import setAuthToken from "../../services/setAuthToken";

const state = {
  user: {},
  token: localStorage.getItem("token") || "",
  errors: [],
  status: ""
};
const actions = {
  addUser({ commit }, newUser) {
    return new Promise((resolve, reject) => {
      commit("authRequest");
      MakeRequests.registerUser(newUser)
        .then(res => {
          const user = res.data.newUser.fulfillmentValue;
          commit("registerSuccess", user);
          resolve(res);
        })
        .catch(err => {
          commit("fetchErrors", err.response.data);
          reject(err);
        });
    });
  },

  loginUser({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("authRequest");
      MakeRequests.loginRegisteredUser(user)
        .then(res => {
          const token = res.data.token;
          localStorage.setItem("token", token);
          setAuthToken(token);
          commit("loginSuccess", token);
          resolve(res);
        })
        .catch(err => {
          commit("fetchErrors", err.response.data);
          reject(err);
        });
    });
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("logout");
      localStorage.removeItem("token");
      setAuthToken(false);
      resolve();
    });
  }
};
const mutations = {
  authRequest: state => (state.status = "loading"),
  registerSuccess: (state, user) => {
    state.status = "success";
    state.user = user;
  },
  loginSuccess: (state, token) => {
    state.status = "success";
    state.token = token;
  },
  fetchErrors: (state, errors) => {
    state.errors = errors;
    state.status = "error";
  },
  logout: state => {
    state.status = "";
    state.token = "";
  }
};
const getters = {
  authStatus: state => state.status,
  isLoggedIn: state => !!state.token
};

export default { state, actions, mutations, getters };
