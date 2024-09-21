<template>
  <div class="todo-list">
    <h2>This is the todo list app</h2>
    <TodoForm/>
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm from '@/components/Todo/TodoForm.vue'
import TodoList from '@/components/Todo/TodoList.vue'
</script>

<style lang="scss" scoped>

</style>