<script setup>
const FIELD_OPTS = ['Text', 'Select', 'Paragrapg', 'Checkbox']

const emits = defineEmits(['addField'])
</script>

<template>
  <div :key="field" v-for="field in FIELD_OPTS">
    <button @click="emits('addField', field)">
      {{ field }}
    </button>
  </div>
</template>
