import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Therapy from '../views/Therapy.vue'
import Buddy from '../views/Buddy.vue'
import About from '../views/About.vue'
import Chat from '../views/Chat.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/buddy',
    name: 'Buddy',
    component: Buddy
  },
  {
    path: '/therapy',
    name: 'Therapy',
    component: Therapy
  },
  {
    path: '/buddy',
    name: 'Buddy',
    component: Buddy
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
