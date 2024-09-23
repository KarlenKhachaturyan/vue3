<script setup>
import { ref, onMounted, defineAsyncComponent, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

// Since we have added props in route
// we can use the parameter inside the component
// by including it with defineProps

// const props = defineProps(['page'])

// now here we can use ` props.page ` in order
// to get the query parameter page and use it
// to make api cals

const events = ref(null)
const router = useRouter()

// Dynamically import components
const EventCard = defineAsyncComponent(() => import('@/components/EventCard.vue'))
const EventCardSkeleton = defineAsyncComponent(() => import('@/components/EventCardSkeleton.vue'))

import EventService from '@/services/EventService.js'

onMounted(() => {
  // by using the router-links the pagination links will not work
  // correctly as this function call will work once as it is called
  // in mounted state.
  // for that we need to wrap the api call in watchEffect hook
  // to make sure that when the page reactive data changes the
  // api call will be done

  try {
    watchEffect(async () => {
      events.value = null
      const { data } = await EventService.getEvents()
      events.value = data
    })
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <div class="home">
    <h1>Events for good {{ page }}</h1>
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
        <EventCardSkeleton />
      </template>
    </Suspense>
    <router-link
      :to="{ name: 'events', query: { page: page - 1 } }"
      rel="previous page"
      v-if="page !== 1"
      >Prev Page</router-link
    >
    <router-link :to="{ name: 'events', query: { page: page + 1 } }" rel="next page"
      >Next Page</router-link
    >
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
