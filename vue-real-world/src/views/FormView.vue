<script setup>
import { reactive } from 'vue';
import BaseInput from '@/components/Base/BaseInput.vue';
import BaseSelect from '@/components/Base/BaseSelect.vue';
import BaseCheckbox from '@/components/Base/BaseCheckbox.vue';
import BaseRadio from '@/components/Base/BaseRadio.vue';
const selectOptions = [
    'a', 'b', 'c', 'd'
]

const event = reactive({
    category: '',
    title: '',
    subtitle: '',
    location: '',
    pets: '',
    extras: {
        party: false,
        music: false
    }
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
        <BaseRadio v-model="event.pets" :value="1" label="Yes" name="pets" />
        <BaseRadio v-model="event.pets" :value="0" label="No" name="pets" />
       
    </div>

    <h4>Extras  {{ event.extras }}</h4>

    <BaseCheckbox 
        label="Party"
        v-model="event.extras.party"
        
    />
    <BaseCheckbox 
        label="Music"
        v-model="event.extras.music"
    />
</form>
</template>