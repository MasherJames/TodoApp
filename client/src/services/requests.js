import axios from "axios";

export default class MakeRequests {
  static registerUser(newUser) {
    return axios.post("http://127.0.0.1:5000/api/v1/users/register", newUser);
  }
  static loginRegisteredUser(user) {
    return axios.post("http://127.0.0.1:5000/api/v1/users/login", user);
  }
}
