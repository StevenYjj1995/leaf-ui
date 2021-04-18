import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Yjj from './components/Yjj.vue'
import Yjj2 from './components/Yjj2.vue'

const history =createWebHashHistory()
const router = createRouter({
  history:history,
  routes:[
    {path:'/',component:Yjj},
    {path:'/xxx',component:Yjj2}
  ]
})

const app =createApp(App)
app.use(router)
app.mount('#app')
