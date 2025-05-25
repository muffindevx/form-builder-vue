<script setup>
import { Plus } from 'lucide-vue-next';
import { ref, defineEmits } from 'vue';

const text = ref('');
const emit = defineEmits(['addOption']);

function handleAddOption() {
  const id = window.crypto.randomUUID();
  const value = text.value;
  emit('addOption', id, value);
  text.value = '';
}

function handleInput(event) {
  text.value = event.target.value;
}
</script>

<template>
  <div class="flex gap-2 w-full">
    <input
      class="flex-2/3 p-3 border-2 border-black rounded-none bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      type="text"
      placeholder="Add an option"
      :value="text"
      @input="handleInput"
    />
    <button
      type="button"
      class="flex items-center gap-2 p-4 bg-black text-white font-mono font-bold text-sm hover:bg-gray-800 transition-colors border-2 border-black"
      @click="handleAddOption"
    >
      <span>Add option</span>
      <Plus color="white" class="w-4 h-4 ml-auto text-white" />
    </button>
  </div>
</template>
