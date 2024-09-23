<script setup>
import { onMounted, ref, inject } from 'vue'
import EventService from '@/services/EventService.js'
import { useRoute } from 'vue-router'

const event = ref(null)
const route = useRoute()
const id = ref(route.params.id)
const gStore = inject('gStore')

onMounted(() => {
  EventService.getEvent(id.value)
    .then(({ data }) => {
      event.value = data
    })
    .catch((err) => {
        if( err.resonse && err.response.status == 404){
            router.push({
                name: '404Resource',
                params: {resource: 'event'}
            })
        }else {
            router.push({
                name: 'NetworkError'
            })
        }

        
      console.log(err)
    })
})
</script>

<template>
  <div>
    <nav>
        <div v-if="gStore.flashMessage" class="flash">
            {{ gStore.flashMessage }}
        </div>
      <router-link :to="{ name: 'event-detail' }"> Details </router-link> |
      <router-link :to="{ name: 'event-register' }"> Register </router-link> |
      <router-link :to="{ name: 'event-edit' }"> Edit </router-link>
    </nav>
    <router-view :event="event" />
  </div>
</template>

<style scoped>
@keyframes colorChange{
    from {
        background: yellow;
    }
    to {
        background: transparent;
    }
}

.flash {
    animation-name: colorChange;
    animation-duration: 3s;
}

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
