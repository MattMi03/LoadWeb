import { createApp } from 'vue'
import App from './App.vue'

process.env.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;

const app = createApp(App);
app.mount('#app');
