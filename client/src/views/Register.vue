<template>
  <div class="container">
    <h1 class="register-header"></h1>
    <form action class="registerform">
      <input
        type="text"
        v-model="username"
        name="username"
        class="register-inputs"
        placeholder="Username"
      >
      <input type="text" v-model="email" name="email" class="register-inputs" placeholder="Email">
      <input
        type="password"
        v-model="password"
        name="password"
        class="register-inputs"
        placeholder="Password"
      >
      <button type="submit" class="register-btn">Create Account</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register(e) {
      e.preventDefault();
      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/users/register", newUser)
        .then(res => {
          console.log("singed up");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>
