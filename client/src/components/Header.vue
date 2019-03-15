<template>
  <header class="header">
    <div>
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
</style>
