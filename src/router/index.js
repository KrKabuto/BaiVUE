// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PaymentComponent from '@/views/Payment.vue'

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
      {
        path: 'vocher',
        name: 'Vocher',
        component: () => import('@/views/Vocher.vue'),
      },
      {
        path: 'lovelist',
        name: 'Lovelist',
        component: () => import('@/views/Lovelist.vue'),
      },
      {
        path: 'basket',
        name: 'Basket',
        component: () => import('@/views/Basket.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/login/login.vue'),
      },
      {
        path: '/payment',
        name: 'payment',
        component: PaymentComponent
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})



export default router
