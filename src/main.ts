import './assets/css/style.css'
import { plugin, defaultConfig } from '@formkit/vue'
import formKitConfig from '../formkit.config'
import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router/auto'

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory()
  })
)

app.use(plugin, defaultConfig(formKitConfig))


app.mount('#app')
