<script setup>
const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    modelValue: {
        type: [String, Number],
        default: ''
    }
})

</script>
<!-- 
 In order to add all the rest 
 class/type/other attrs you can use v-bind='$attrs' 
-->
<template>
    <label >{{ props.label }}</label>
    <textarea 
        v-bind="$attrs"
        :value="modelValue" 
        :placeholder="props.label"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>