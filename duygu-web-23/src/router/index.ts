import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import ContactUs from '../views/ContactUs.vue'
import PaymentAndDelivery from '../views/PaymentAndDelivery.vue'
import PrivacyandSecurity from '../views/PrivacyandSecurity.vue'
import DistaneSaleAgreement from '../views/DistanceSaleAggrement.vue'
import WarrantyAndReturn from '../views/WarrantyAndReturn.vue'
import kulakliklar from '../views/kulakliklar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/contactUs',
      name: 'ContactUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/payment-delivery',
      name: 'PaymentAndDelivery',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PaymentAndDelivery.vue')
    },
    {
      path: '/privacy-security',
      name: 'PrivacyandSecurity',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PrivacyandSecurity.vue')
    },
    {
      path: '/distance-sale-agreement',
      name: 'DistanceSaleAgreement',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DistanceSaleAggrement.vue')
    },
    {
      path: '/warranty-return',
      name: 'WarrantyAnReturn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WarrantyAndReturn.vue')
    },
    {
      path: '/kulakliklar',
      name: 'kulakliklar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/kulakliklar.vue')
    },
  ]
})

export default router
