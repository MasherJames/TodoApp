<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}
</style>
