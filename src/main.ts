import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/assets/styles/reset.scss';
import '@/assets/styles/index.scss';
import App from './App.vue';
import router from './router';
import './firebase.ts';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
