<script setup>
import {onMounted, ref} from 'vue'
const event = ref(null)
import EventService from "@/services/EventService.js";
import {useRoute} from "vue-router";
const route = useRoute()
const id = ref(route.params.id)

onMounted(() => {
  EventService.getEvent(id.value)
      .then(({data})=> {
        event.value = data;
      })
      .catch(err => {
        console.log(err)
      })
})
</script>

<template>
  <div v-if="event" class="event-card">
    <h2>{{ event.category }}</h2>
    <span>${{ event.price }}</span>
    <pre>{{event.rating}}</pre>
  </div>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.01);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
