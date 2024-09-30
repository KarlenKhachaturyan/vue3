<script setup>
const props = defineProps({
    label: {
        type:String,
        default: ''
    },
    options: {
        type: Array,
        default: () => [],
        required: true
    },
    modelValue: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <label v-if="label" :for="label">{{ label }}</label>
    <select
        :name="label" 
        :value="modelValue"
        v-bind="{
            ...$attrs,
            onChange: ($event) => {$emit('update:modelValue', $event.target.value)}
        }"
    >
        <option 
            v-for="(option, index) in props.options" 
            :key="index" 
            :value="option"
            :selected="option === modelValue"
        >
            {{ option }}
        </option>
    </select>
</template>