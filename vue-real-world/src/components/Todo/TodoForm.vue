<script setup>
import {ref} from 'vue'
import {useTodoListStore} from "@/stores/todolist.js";

const todo = ref('')
const store = useTodoListStore()

const handleAdd = (item) => {
  if(item && item.trim() !== '') {
    store.addTodo(item)
    todo.value = ''
  }
}

</script>

<template>
  <div>
    <form @submit.prevent="handleAdd(todo)">
      <input type="text" v-model="todo" />
      <input type="submit" title="Add" />
    </form>
  </div>
</template>


<style lang="scss" scoped>

</style>