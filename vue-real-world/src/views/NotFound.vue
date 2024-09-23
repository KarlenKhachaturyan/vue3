<script setup>

defineProps({
    resource: {
        type: String,
        required: true,
        default: 'page'
    }
})
</script>


<template>
    <div>
        404 {{ resource }} not found
        <router-link to="/">Go back home</router-link>
    </div>
</template>
