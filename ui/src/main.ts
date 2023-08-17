import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from '@/plugins/api'

const app = createApp(App)

app
  .use(router)
  .use(api)

app.mount('#app')
