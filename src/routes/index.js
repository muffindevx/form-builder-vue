import FormBuilder from '@/pages/FormBuilder.vue';
import FormPreview from '@/pages/FormPreview.vue';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', component: FormBuilder },
  { path: '/preview', component: FormPreview },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
