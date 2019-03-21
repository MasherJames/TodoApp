<template>
  <div>
    <h3>Add a new todo</h3>
    <form @submit="submitTodo" class="addTodo">
      <input type="text" v-model="title" placeholder="title ...">
      <input type="text" v-model="content" placeholder="content ...">
      <input type="submit" class="todoSubmit" value="submit">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    submitTodo(e) {
      e.preventDefault();
      const todo = {
        title: this.title,
        content: this.content
      };
      this.addTodo(todo);
      this.$data.title = "";
      this.$data.content = "";
    }
  }
};
</script>

<style scoped>
div {
  font-size: 1.3rem;
}
.addTodo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.addTodo > * {
  margin: 1rem;
}
input[type="text"] {
  border: 0;
  border-bottom: 2px solid black;
  padding: 1rem;
  outline: 0;
  width: 40vw;
  font-size: 1.3rem;
}

input[type="submit"] {
  padding: 1rem;
  background: grey;
  color: #fff;
  border-radius: 2rem;
  width: 10vw;
  outline: 0;
}
h3 {
  text-align: center;
  padding-top: 2rem;
}
</style>
