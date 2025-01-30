import { createRouter, createWebHistory } from 'vue-router';
import AdminView from '@/views/AdminView.vue';
import SalesView from '@/views/SalesView.vue';
import CustomerView from '@/views/CustomerView.vue';

const routes = [
  { path: '/', redirect: '/customer' },  // Default route for the homepage
  { path: '/admin', component: AdminView },
  { path: '/sales', component: SalesView },
  { path: '/customer', component: CustomerView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
