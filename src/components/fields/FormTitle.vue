<script setup>
import { inject } from 'vue';

const form = inject('form');
</script>

<template>
  <div class="flex flex-col gap-2">
    <h2
      class="text-xl font-bold font-mono editable"
      contenteditable="true"
      :textContent="form.title"
      @input="form.title = $event.target.textContent"
    ></h2>
    <span
      class="text-sm font-mono editable"
      contenteditable="true"
      :textContent="form.description"
      @input="form.description = $event.target.textContent"
    ></span>
  </div>
</template>

<style scoped>
.editable[contenteditable]:focus {
  outline: 0px solid transparent;
}
</style>
