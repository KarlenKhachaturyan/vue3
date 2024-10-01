<script setup>
import BaseRadio from './BaseRadio.vue';
const props = defineProps({
    options: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    modelValue: {
        type: [String, Number],
        required: true
    },
})
</script>

<template>
    <BaseRadio
        v-for="option in options"
        :key="option.label"
        :label="option.label"
        :value="option.value"
        :name="name"
        :model-value="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
    />
</template>