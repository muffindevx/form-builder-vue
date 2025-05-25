<script setup>
import { ChevronLeft } from 'lucide-vue-next';
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = inject('form');

const { title, description, elements } = form.value;

function back() {
  router.push('/');
}
</script>

<template>
  <div class="flex-1 p-4">
    <div class="max-w-2xl mx-auto">
      <div
        v-if="form.elements?.length === 0"
        class="border-4 border-dashed border-gray-300 rounded-none p-12 text-center"
      >
        <div className="text-6xl mb-4">🐕</div>
        <p className="font-mono text-lg font-bold">
          You do not have any form yet!
        </p>
        <button
          type="button"
          className="justify-end p-4 bg-black text-white font-mono font-bold text-sm hover:bg-gray-800 transition-colors border-2 border-black"
          @click="back"
        >
          Back to builder
        </button>
      </div>
      <div class="mt-8 space-y-6 border-4 border-black p-8 bg-white" v-else>
        <header class="flex justify-between">
          <div>
            <h2 class="text-xl font-bold font-mono">{{ title }}</h2>
            <p class="text-sm font-mono">{{ description }}</p>
          </div>
          <button class="flex gap-2" @click="back">
            <ChevronLeft />
            <span>Back</span>
          </button>
        </header>

        <div v-for="element in elements" :key="element.id">
          <!-- Text fields -->
          <div
            v-if="
              element.type === 'text' ||
              element.type === 'email' ||
              element.type === 'tel' ||
              element.type === 'date'
            "
          >
            <label
              class="block font-mono font-bold text-sm mb-2 border-b border-gray-300 pb-1 editable"
              >{{ element.label }}</label
            >
            <input
              class="w-full p-3 border-2 border-black rounded-none bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              :type="element.type"
              :placeholder="element.placeholder"
            />
          </div>
          <!-- Select field -->
          <div v-if="element.type === 'select'">
            <label
              class="block font-mono font-bold text-sm mb-2 border-b border-gray-300 pb-1 editable"
              contenteditable
              @input="element.label = $event.target.textContent"
              >{{ element.label }}</label
            >

            <select
              class="w-full p-3 border-2 border-black rounded-none bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              v-if="element.options.length > 0"
            >
              <option value="">Choose an option...</option>
              <option
                v-for="option in element.options"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <!-- Radio button field-->
          <div v-if="element.type === 'radio'">
            <span
              class="block font-mono font-bold text-sm mb-2 border-b border-gray-300 pb-1 editable"
              >{{ element.label }}</span
            >

            <fieldset v-for="option in element.options" :key="option.id">
              <label class="flex gap-2">
                <input type="radio" :value="option.value" />
                {{ option.label }}
              </label>
            </fieldset>
          </div>
          <!-- Checkbox field-->
          <div v-if="element.type === 'checkbox'">
            <span
              class="block font-mono font-bold text-sm mb-2 border-b border-gray-300 pb-1 editable"
              >{{ element.label }}</span
            >

            <label
              class="flex gap-2"
              v-for="option in element.options"
              :key="option.id"
            >
              <input type="checkbox" value="option.value" />
              {{ option.label }}
            </label>
          </div>
          <!-- Textarea field-->
          <div v-if="element.type === 'textarea'">
            <label
              class="block font-mono font-bold text-sm mb-2 border-b border-gray-300 pb-1 editable"
              >{{ element.label }}</label
            >
            <textarea
              class="w-full p-3 border-2 border-black rounded-none bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              rows="8"
              :placeholder="element.placeholder"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
