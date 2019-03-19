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
  },

  addTodo({ commit }, newTodo) {
    MakeRequests.postTodo(newTodo)
      .then(res => {
        commit("newTodo", res.data.newTodo);
      })
      .catch(err => {
        commit("fetchErrors", err);
      });
  },

  removeTodo({ commit }, id) {
    MakeRequests.deleteTodo(id)
      .then(() => {
        commit("deleteTodo", id);
      })
      .catch(err => {
        commit("fetchErrors", err);
      });
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  fetchErrors: (state, errors) => {
    state.errors = errors;
  }
};

const getters = {
  allTodos: state => state.todos
};
export default { state, actions, mutations, getters };
