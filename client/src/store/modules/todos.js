import MakeRequests from "../../services/requests";

const state = {
  todos: [],
  errors: {}
};

const actions = {
  fetchTodos({ commit }) {
    MakeRequests.getTodos()
      .then(res => {
        commit("setTodos", res.data.todos);
      })
      .catch(err => {
        commit("fetchErrors", err);
      });
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  fetchErrors: (state, errors) => {
    state.errors = errors;
  }
};

const getters = {
  allTodos: state => state.todos
};
export default { state, actions, mutations, getters };
