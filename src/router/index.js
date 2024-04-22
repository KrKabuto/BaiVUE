// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'coffee',
        name: 'Coffee',
        component: () => import('@/views/CoffeeProducts.vue'),
      },
      {
        path: 'icream',
        name: 'Icream',
        component: () => import('@/views/IcreamProducts.vue'),
      },
      {
        path: 'juice',
        name: 'Juice',
        component: () => import('@/views/JuiceProducts.vue'),
      },
      {
        path: 'milk',
        name: 'Milk',
        component: () => import('@/views/MilkProducts.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})



export default router
