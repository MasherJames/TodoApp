<template>
  <div class="container">
    <h1 class="login-header">Login and create a todo</h1>
    <form @submit="login" class="loginform">
      <input type="text" v-model="email" name="email" class="login-inputs" placeholder="Email">
      <input
        type="password"
        v-model="password"
        name="password"
        class="login-inputs"
        placeholder="Password"
      >
      <button type="submit" class="login-btn">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      const user = {
        email: this.email,
        password: this.password
      };
      axios
        .post("http://127.0.0.1:5000/api/v1/users/login", user)
        .then(res => {
          if (res.data.message === "succcessfully loggedin") {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/todos");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
}

.loginform {
  display: flex;
  flex-direction: column;
  width: 50vw;
}

.login-inputs {
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 2rem;
  outline: none;
  font-size: 1.3rem;
}
.login-btn {
  width: 25vw;
  margin-left: 2rem;
  padding: 1rem;
  border-radius: 2rem;
  outline: none;
}
</style>
