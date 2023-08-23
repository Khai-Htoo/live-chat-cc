import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import { auth } from '@/firebase/config'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if(!user){
        next()
      }else{
        next('chatRoom')
      }
    }
  },
  {
    path: '/chatRoom',
    name: 'ChatRoom',
    component: () => import('../views/ChatRoom.vue'),
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if(user){
        next()
      }else{
        next('/')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
