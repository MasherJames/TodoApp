<template>
  <header class="header">
    <div class="app-header">
      <router-link to="/" exact>Todo App</router-link>
    </div>

    <div class="header-di">
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
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
}
</style>
