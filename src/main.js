import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AntD from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import "ant-design-vue/dist/reset.css"

const app = createApp(App)

app.use(createPinia())
app.use(AntD)
app.use(router)

app.mount('#app')
