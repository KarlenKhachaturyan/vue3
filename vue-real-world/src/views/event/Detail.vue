<script setup>
const props = defineProps(['event'])
</script>

<template>
  <div v-if="event" class="event-detail">
    <h2>{{ event.category }}</h2>
    <span>${{ event.price }}</span>
    <pre>{{ event.rating }} </pre>
  </div>
</template>

<style scoped>
.event-detail {
  padding: 20px;
  margin: 0 auto;
  cursor: default;
}

</style>
