<script setup>
import {useTodoListStore} from "@/stores/todolist.js";
import {storeToRefs} from "pinia";

const store = useTodoListStore()
const {todoList} = storeToRefs(store)
const {toggleCompleted, deleteTodo} = store


</script>

<template>
  <div v-for="todo in todoList" :key="todo.id">
    <div class="flex">
      <p :class="{'completed': todo.completed}">{{todo.item}}</p>
      <button @click.stop="toggleCompleted(todo.id)">Complete Todo</button>
      <button @click="deleteTodo(todo.id)">Delete Todo</button>
    </div>
  </div>
</template>


<style scoped>
  .flex {
    margin: 19px auto 0;
    max-width: 60rem;
    display: flex;
    justify-content: space-around;

    & button {
      color: red;
    }

    & .completed {
      text-decoration: line-through;
    }
  }
</style>