<script setup>
import { inject } from 'vue';
import {useRouter} from 'vue-router'
const props = defineProps(['event'])
const router = useRouter()
const gStore = inject('gStore')

function handleRegister() {
    gStore.flashMessage = 'Your event has been registered'
    setTimeout(() => {
        gStore.flashMessage = ''
    }, 3000)
    router.push({ name: 'event-detail'})
}

</script>

<template>
  <p>Register the event</p>
  <button @click="handleRegister">Register</button>
</template>

<style scoped></style>
