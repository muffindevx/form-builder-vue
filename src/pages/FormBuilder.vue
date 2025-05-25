<script setup>
import AddOption from '@/components/AddOption.vue';
import FormTitle from '@/components/fields/FormTitle.vue';
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const fields = inject('fields');
const form = inject('form');
const router = useRouter();

function handlePreview() {
  router.push('/preview');
}
</script>

<template>
  <div class="flex-1 p-4">
    <div class="max-w-2xl mx-auto">
      <div
        v-if="fields.length === 0"
        class="border-4 border-dashed border-gray-300 rounded-none p-12 text-center"
      >
        <div className="text-6xl mb-4">🐕</div>
        <p className="font-mono text-lg font-bold">No elements yet!</p>
        <p className="font-mono text-sm text-gray-600 mt-2">
          Add some form elements from the left sidebar
        </p>
      </div>
      <div class="mt-8 space-y-6 border-4 border-black p-8 bg-white" v-else>
        <div>
          <FormTitle />
        </div>
        <div v-for="element in form.elements" :key="element.id">
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
              contenteditable
              @input="element.label = $event.target.textContent"
              >{{ element.label }}</label
            >
            <input
              class="w-full p-3 border-2 border-black rounded-none bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              :type="element.type"
              :placeholder="`${element.placeholder} ${element.label}...`"
            />
          </div>
          <div v-if="element.type === 'textarea'">
            <label
              class="block font-mono font-bold text-sm mb-2 border-b border-gray-300 pb-1 editable"
              contenteditable
              @input="element.label = $event.target.textContent"
              >{{ element.label }}</label
            >
            <textarea
              class="w-full p-3 border-2 border-black rounded-none bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              rows="8"
              :placeholder="`${element.placeholder} ${element.label}...`"
            ></textarea>
          </div>
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
            <div class="mt-4">
              <AddOption
                @add-option="
                  (id, text) => {
                    element.options.push({
                      label: text,
                      value: id,
                    });
                  }
                "
              />
            </div>
          </div>
          <div v-if="element.type === 'radio'">
            <span
              class="block font-mono font-bold text-sm mb-2 border-b border-gray-300 pb-1 editable"
              contenteditable
              @input="element.label = $event.target.textContent"
              >{{ element.label }}</span
            >

            <fieldset
              :name="element.label.toLocaleLowerCase().replace(' ', '_')"
              v-for="option in element.options"
              :key="option.id"
            >
              <label class="flex gap-2">
                <input
                  :name="element.label.toLocaleLowerCase().replace(' ', '_')"
                  type="radio"
                  value="option.value"
                />
                {{ option.label }}
              </label>
            </fieldset>

            <div class="mt-4">
              <AddOption
                @add-option="
                  (id, text) => {
                    element.options.push({
                      label: text,
                      value: id,
                    });
                  }
                "
              />
            </div>
          </div>
          <div v-if="element.type === 'checkbox'">
            <span
              class="block font-mono font-bold text-sm mb-2 border-b border-gray-300 pb-1 editable"
              contenteditable
              @input="element.label = $event.target.textContent"
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
            <AddOption
              @add-option="
                (id, text) => {
                  element.options.push({
                    label: text,
                    value: id,
                  });
                }
              "
            />
          </div>
        </div>
        <div className="pt-6 border-t-2 border-black">
          <button
            type="button"
            className="w-full p-4 bg-black text-white font-mono font-bold text-sm hover:bg-gray-800 transition-colors border-2 border-black"
            @click="handlePreview"
          >
            Show Preview
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editable[contenteditable]:focus {
  outline: 0px solid transparent;
}
</style>
