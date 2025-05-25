<script setup>
import FieldsForm from '../components/FieldsForm.vue'
import RenderForm from '../components/RenderForm.vue'

const { fields, addField } = defineProps({
  fields: Array,
  addField: Function,
})
</script>

<template>
  <main>
    <aside>
      <FieldsForm @add-field="addField" />
    </aside>
    <section v-if="fields.length > 0">
      <RenderForm :fields="fields" />
    </section>
    <section v-else>
      <h1>No fields for the moment</h1>
    </section>
  </main>
</template>
