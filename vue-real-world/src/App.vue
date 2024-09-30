<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useMouse} from '@/composables/mouse'
import {useTitle} from '@vueuse/core'

const { x,y } = useMouse()
const title = useTitle('VueUse composable', {titleTemplate: '%s using the useTitle'})
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <!-- <p>The x parameter is: {{ x }}</p>
        <p>The y parameter is: {{ y }}</p> -->
        <nav>
          <RouterLink to="/">Events</RouterLink> |
          <RouterLink to="/about">About</RouterLink> |
          <RouterLink to="/dynamic-form">Form</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
#layout {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }

  a.router-link-exact-active {
    color: #42b983;
  }
}


</style>
