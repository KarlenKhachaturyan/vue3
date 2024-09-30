<script setup>
const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    value: {
        type: [String, Number],
        required: true
    }
})

</script>

<template>
     <input 
        :checked="modelValue === value"  
        @change="$emit('update:modelValue', value)" 
        type="radio" 
        :value="value"
        v-bind="$attrs"
        >
     <label v-if="label" >{{ label }}</label><br>
</template>