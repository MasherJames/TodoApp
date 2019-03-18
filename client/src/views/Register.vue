<template>
  <div class="container">
    <h1 class="register-header">Create a todo account</h1>
    <form @submit="register" class="registerform">
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
import { mapActions } from "vuex";
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
    ...mapActions(["addUser"]),
    register(e) {
      e.preventDefault();
      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.addUser(newUser)
        .then(() => {
          this.$router.push("/login");
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

.registerform {
  display: flex;
  flex-direction: column;
  width: 50vw;
}

.register-inputs {
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 2rem;
  outline: none;
  font-size: 1.3rem;
}
.register-btn {
  width: 25vw;
  margin-left: 2rem;
  padding: 1rem;
  border-radius: 2rem;
  outline: none;
}
</style>
