import { createApp } from 'vue'
import './style.scss'
import "normalize.css";
import App from './App.vue'
import router from './routers'
import Promise from 'es6-promise';

Promise.polyfill()

const app = createApp(App)
app.use(router)
app.mount('#app')
