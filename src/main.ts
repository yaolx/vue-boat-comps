import { createApp } from 'vue'
import App from '@/App.vue'
import routers from '@/routes'
import store from '@/store/index'
import MyKit from '../packages'
import './index.css'
const app = createApp(App)
app.use(MyKit).use(routers).use(store).mount('#app')
