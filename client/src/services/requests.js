import axios from "axios";

export default class MakeRequests {
  static registerUser(newUser) {
    return axios.post("http://127.0.0.1:5000/api/v1/users/register", newUser);
  }
  static loginRegisteredUser(user) {
    return axios.post("http://127.0.0.1:5000/api/v1/users/login", user);
  }

  static getTodos() {
    return axios.get("http://127.0.0.1:5000/api/v1/todo");
  }

  static postTodo(newTodo) {
    return axios.post("http://127.0.0.1:5000/api/v1/todo", newTodo);
  }

  static deleteTodo(id) {
    return axios.delete(`http://127.0.0.1:5000/api/v1/todo/${id}`);
  }
}
