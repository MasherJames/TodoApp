<template>
  <div class="paginate-btn">
    <button type="button" v-if="page != 1" @click="page--"><<</button>
    <button
      type="button"
      v-for="pageNumber in pages.slice(page-1, page+5)"
      :key="pageNumber"
      @click="page = pageNumber"
    >{{pageNumber}}</button>
    <button type="button" @click="page++" v-if="page < pages.length">>></button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Pagination",
  data: {
    todos: [],
    pages: [],
    page: 1,
    todosPerPage: 9
  },
  methods: {
    setPages() {
      let noOfPages = Math.ceil(this.todos.length / this.todosPerPage);
      for (let page = 1; page <= noOfPages; page++) {
        this.pages.push(page);
      }
    },
    paginate(todos) {
      let page = this.page;
      let todosPerPage = this.todosPerPage;
      let startIndx = page * todosPerPage - todosPerPage;
      let lastIndx = page * todosPerPage - todosPerPage;
      return todos.slice(startIndx, lastIndx);
    }
  },
  computed: {
    ...mapGetters(["allTodos"]),
    postDispaly() {
      return this.paginate(this.todos);
    }
  },
  watch: this.setPages(),
  created() {
    this.todos = allTodos;
  }
};
</script>

<style scoped>
</style>
