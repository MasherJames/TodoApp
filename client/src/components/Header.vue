<template>
  <header class="header">
    <div class="app-header">
      <router-link to="/" exact>Todo App</router-link>
    </div>

    <div class="header-di">
      <span v-if="isLoggedIn">
        <a @click="logoutuser">Logout</a>
      </span>
      <span v-else>
        <router-link to="/register">Register</router-link>
        <router-link to="/login">Login</router-link>
      </span>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions(["logout"]),
    logoutuser() {
      this.logout().then(() => this.$router.push("/login"));
    }
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>

<style  scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.header a {
  text-decoration: none;
  color: #fff;
}

.header-di a {
  padding: 1rem;
  cursor: pointer;
}

.header-di a:hover {
  background-color: rgb(83, 82, 82);
}
</style>
