<script setup>
import { reactive } from 'vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import BaseSelect from '@/components/Base/BaseSelect.vue';
const selectOptions = [
    'a', 'b', 'c', 'd'
]

const event = reactive({
    category: '',
    title: '',
    subtitle: '',
    location: '',
    pets: '',
    extras: []
})


</script>

<template>
    <h2>Create an event</h2>
<form action="" style="text-align: left; display: flex; flex-direction: column; align-items: center;">
    
    <BaseSelect
        :options="selectOptions"
        v-model="event.category"
        label="Select a Category"
    />

    <h4>Name and desccribe an event</h4>

    <BaseInput 
        label="Title"
        v-model="event.title"
    />

    <BaseInput 
        label="Subtitle"
        v-model="event.subtitle"
    />

    <h4>Where is your event</h4>

    <BaseInput 
        label="Location"
        v-model="event.location"
    />

    <h4> Are pets allowed</h4>
    <div>
        <input v-model="event.pets" type="radio" id="yes" name="pets" value="yes">
        <label for="yes">yes</label><br>
        <input v-model="event.pets" type="radio" id="no" name="pets" value="no">
        <label for="no">no</label>
    </div>

    <h4>Extras  {{ event.extras }}</h4>

    <input type="checkbox" id="jack" value="Jack" v-model="event.extras" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="event.extras" />
    <label for="john">John</label>
</form>
</template>