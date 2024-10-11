import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../components/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue';
import HomeView from '@/views/HomeView.vue';
import MainMenu from '@/views/MainMenu.vue';
import CreateRoomComponent from '@/components/CreateRoomComponent.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
  {
    path: '/',
    // name: "RegisterView",
    component: RegisterView
  },
  {
    path: '/Home',
    // name: "RegisterView",
    component: HomeView 
  },
  {
    path: '/Main',
    // name: "RegisterView",
    component: MainMenu 
  },
  {path: '/Login',
    // name: "RegisterView",
    component: LoginView },
  {
    path: '/Create',
    component: CreateRoomComponent
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../components/AboutView.vue')
  // }
]

console.log('=== process.env.BASE_URL: ', process.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
