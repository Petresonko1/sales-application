import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';  // Vuex or Pinia store

const app = createApp(App);
app.use(store);  // Integrate Vuex or Pinia
app.use(router); // Set up routing
app.mount('#app'); // Mount the app to the root element in the HTML
