<script setup>
const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    modelValue: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
     <input 
        :checked="modelValue" 
        @change="$emit('update:modelValue', $event.target.checked)" 
        type="checkbox" 
        >
     <label v-if="label" >{{ label }}</label><br>
</template>