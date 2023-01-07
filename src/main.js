import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

const app = createApp(App);
app.use(router);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

console.log('MODE', import.meta.env.MODE);
console.log('MODE', import.meta.env.VITE_APP_API_URL);
