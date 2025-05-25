<script setup>
import { ref } from 'vue'

const props = defineProps({
  fields: {
    type: Array,
    required: true,
  },
})

const labelText = ref('Text')
const labelSelect = ref('Select')
const options = ref([])

function onChangeLabelText(event) {
  labelText.value = event.target.textContent
  props.fields.forEach((field) => {
    if (field.type === 'Text') {
      field.label = labelText.value
    }
  })
}

function onChangeLabelSelect(event) {
  labelSelect.value = event.target.textContent

  props.fields.forEach((field) => {
    if (field.type === 'Select') {
      field.label = labelSelect.value
      field.value = labelSelect.value
    }
  })
}

function onAddOption() {
  options.value.push({
    id: window.crypto.randomUUID(),
    label: '',
    value: '',
  })

  props.fields.forEach((field) => {
    if (field.type === 'Select') {
      field.options = options.value
    }
  })
}
</script>

<template>
  <div>
    <h1>About you</h1>
    <h3>Tell us about yourself</h3>
    <div v-for="field in fields" :key="field">
      <div v-if="field.type === 'Text'">
        <label contenteditable :textContent="labelText" @input="onChangeLabelText">Text</label>

        <input type="text" :placeholder="labelText" />
      </div>
      <div v-if="field.type === 'Select'">
        <label contenteditable :textContent="labelSelect" @input="onChangeLabelSelect"
          >Select</label
        >

        <select v-if="options.length > 0">
          <option v-for="option in options" :key="option.id" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <div v-if="options.length > 0">
          <input v-for="option in options" :key="option.id" type="text" v-model="option.label" />
        </div>
        <button @click="onAddOption">Add option</button>
      </div>
    </div>
  </div>
</template>
