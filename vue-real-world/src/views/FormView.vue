<script setup>
import { reactive } from 'vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseSelect from '@/components/Base/BaseSelect.vue'
import BaseCheckbox from '@/components/Base/BaseCheckbox.vue'
import BaseRadioGroup from '@/components/Base/BaseRadioGroup.vue'
import BaseTextArea from '@/components/Base/BaseTextArea.vue'

const selectOptions = ['a', 'b', 'c', 'd']

const petOptions = [
  { label: 'Cats', value: 'cats' },
  { label: 'Dogs', value: 'dogs' }
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

const sendForm = () => {
  // here we will send the form data
  // using axios post....
}
</script>

<template>
  <h2>Create an event</h2>
  <form
    @submit.prevent="sendForm"
    style="text-align: left; display: flex; flex-direction: column; align-items: center"
  >
    <BaseTextArea label="Text area" v-model="event.category" maxLength="40" />
    <BaseSelect :options="selectOptions" v-model="event.category" label="Select a Category" />

    <h4>Name and desccribe an event</h4>

    <BaseInput label="Title" v-model="event.title" />

    <BaseInput label="Subtitle" v-model="event.subtitle" />

    <h4>Where is your event</h4>

    <BaseInput label="Location" v-model="event.location" />

    <h4>Are pets allowed</h4>
    <div>
      <BaseRadioGroup v-model="event.pets" name="pets" :options="petOptions" />
    </div>

    <h4>Extras {{ event.extras }}</h4>

    <BaseCheckbox label="Party" v-model="event.extras.party" />
    <BaseCheckbox label="Music" v-model="event.extras.music" />

    <button type="submit">Submit</button>
  </form>
</template>
