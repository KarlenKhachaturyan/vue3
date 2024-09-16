<script setup>
import EventCard from "@/components/EventCard.vue";
import {ref} from 'vue'

const events = ref([
    {
      id: 1,
      category: 'a',
      title: 'asdf',
      description: 'asdf',
      location: 'sadfas',
      date: "Jan 28, 2022",
      time: '12:00',
      petsAllowed: false,
      organizer: 'Admin'
    },
  {
    id: 2,
    category: 'a',
    title: 'asdf',
    description: 'asdf',
    location: 'sadfas',
    date: "Jan 28, 2022",
    time: '12:00',
    petsAllowed: false,
    organizer: 'Admin'
  },
  {
    id: 3,
    category: 'a',
    title: 'asdf',
    description: 'asdf',
    location: 'sadfas',
    date: "Jan 28, 2022",
    time: '12:00',
    petsAllowed: false,
    organizer: 'Admin'
  },
])
</script>

<template>
  <div class="home">
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