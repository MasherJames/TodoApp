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
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    login(e) {
      e.preventDefault();
      const user = {
        email: this.email,
        password: this.password
      };
      this.loginUser(user)
        .then(() => {
          this.$router.push("/todos");
        })
        .catch(err => console.log(err));
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
