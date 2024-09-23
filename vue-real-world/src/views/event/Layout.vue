<script setup>
import { onMounted, ref } from 'vue'
const event = ref(null)
import EventService from '@/services/EventService.js'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = ref(route.params.id)

onMounted(() => {
  EventService.getEvent(id.value)
    .then(({ data }) => {
      event.value = data
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<template>
  <div>
    <nav>
      <router-link :to="{ name: 'event-detail' }"> Details </router-link> |
      <router-link :to="{ name: 'event-register' }"> Register </router-link> |
      <router-link :to="{ name: 'event-edit' }"> Edit </router-link>
    </nav>
    <router-view :event="event" />
  </div>
</template>

<style scoped>
.event-card {
  padding: 20px;
  cursor: pointer;
  margin: 0 auto;
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
