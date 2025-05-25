<script setup>
const props = defineProps({
  fields: Array,
})
</script>

<template>
  <div>
    <h1>Form Preview</h1>
    <form>
      <div v-for="field in props.fields" :key="field.id">
        <label>{{ field.label }}</label>
        <div v-if="field.type === 'Text'">
          <input type="text" v-model="field.value" />
        </div>
        <div v-if="field.type === 'Select'">
          <select v-model="field.value">
            <option v-for="option in field.options" :key="option.id" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
      <p>{{ props.fields }}</p>
    </form>
  </div>
</template>
