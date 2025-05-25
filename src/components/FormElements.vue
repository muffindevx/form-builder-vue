<script setup>
import {
  Plus,
  Type,
  MessageSquare,
  CheckSquare,
  Circle,
  Mail,
  Phone,
  Calendar,
  List,
} from 'lucide-vue-next';

const FORM_ELEMENT_TYPES = [
  {
    type: 'text',
    label: 'Text Input',
    icon: Type,
    placeholder: 'Enter',
  },
  {
    type: 'textarea',
    label: 'Text Area',
    icon: MessageSquare,
    placeholder: 'Enter',
  },
  { type: 'select', label: 'Select', icon: List, options: [] },
  { type: 'checkbox', label: 'Checkbox', icon: CheckSquare, options: [] },
  { type: 'radio', label: 'Radio Button', icon: Circle, options: [] },
  { type: 'email', label: 'Email', icon: Mail, placeholder: 'Enter' },
  { type: 'tel', label: 'Phone', icon: Phone, placeholder: 'Enter' },
  { type: 'date', label: 'Date', icon: Calendar },
];

const emit = defineEmits(['addField']);
</script>

<template>
  <aside class="flex flex-col w-80 border-r-4 border-black p-6 bg-gray-50">
    <h2 class="text-xl font-bold font-mono mb-6 border-b-2 border-black pb-2">
      Form Elements
    </h2>
    <div class="space-y-3">
      <button
        v-for="element in FORM_ELEMENT_TYPES"
        :key="element.type"
        class="w-full p-4 border-2 border-black bg-white hover:bg-yellow-100 transition-colors duration-200 flex items-center space-x-3 font-mono text-sm font-medium group"
        @click="emit('addField', element)"
      >
        <component :is="element.icon" class="w-5 h-5" />
        <span>{{ element.label }}</span>
        <Plus
          class="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </button>
    </div>
  </aside>
</template>
