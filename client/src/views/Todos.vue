<template>
  <div>
    <AddTodo/>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{todo.title}}
        <img
          @click="removeTodo(todo.id)"
          src="../assets/icons/delete.svg"
          alt="delete"
        >
      </div>
    </div>
    <Pagination/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "../components/AddTodo";
import Pagination from "../components/Pagination";
export default {
  name: "Todos",
  components: { AddTodo, Pagination },
  methods: {
    ...mapActions(["fetchTodos", "removeTodo"])
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  font-size: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1.5rem;
  padding: 5rem;
}

.todo {
  background-color: grey;
  padding: 5rem;
  border-radius: 1rem;
  position: relative;
}

img {
  width: 3rem;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  cursor: pointer;
  color: #fff;
}
</style>
