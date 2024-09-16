<script setup>
import EventCard from "@/components/EventCard.vue";
import {onMounted, ref} from 'vue'
const events = ref(null)
import EventService from "../../services/EventService.js";

onMounted(() => {
  EventService.getEvents()
  .then(({data})=> {
    console.log(data)
    events.value = data
  })
    .catch(err => {console.log(err)})
})

</script>

<template>
  <div class="home">
    <h1>Events for good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>