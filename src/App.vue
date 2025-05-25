<script setup>
import { ref, provide } from 'vue';
import FormElements from '@/components/FormElements.vue';

const fields = ref([]);
const form = ref({
  title: 'Your title',
  description: 'Your description',
  elements: [],
});

provide('fields', fields);
provide('form', form);

function handleAddField(field) {
  const newField = {
    id: window.crypto.randomUUID(),
    ...field,
  };

  fields.value.push(newField);
  form.value.elements.push(newField);
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <header class="border-b-4 border-black p-6">
      <h1 class="text-3xl font-bold font-mono">Form Builder</h1>
      <p class="text-sm font-mono mt-2">
        Build your form with simple, clean elements
      </p>
    </header>
    <main class="flex min-h-[calc(100vh-120px)]">
      <FormElements @add-field="handleAddField" />
      <router-view />
    </main>
  </div>
</template>
