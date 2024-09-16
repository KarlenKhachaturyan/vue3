<script setup>
import {ref, onMounted, defineAsyncComponent} from 'vue'
import {useRouter} from 'vue-router'

const events = ref(null)
const router = useRouter()

// Dynamically import components
const EventCard = defineAsyncComponent(() => import('@/components/EventCard.vue'))
const EventCardSkeleton = defineAsyncComponent(() => import('@/components/EventCardSkeleton.vue'))

import EventService from "@/services/EventService.js";

onMounted(async () => {
  try {
    const {data} = await EventService.getEvents()
    events.value = data
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <div class="home">
    <h1>Events for good</h1>
    <Suspense>
      <template #default>
        <EventCard
            v-for="event in events"
            :key="event.id"
            :event="event"
            @click="router.push(`/event/${event.id}`)"
        ></EventCard>
      </template>
      <template #fallback>
        <EventCardSkeleton/>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
