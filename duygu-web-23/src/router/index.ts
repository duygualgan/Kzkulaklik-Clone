import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import ContactUs from '../views/ContactUs.vue'
import PaymentAndDelivery from '../views/PaymentAndDelivery.vue'
import PrivacyandSecurity from '../views/PrivacyandSecurity.vue'
import DistaneSaleAgreement from '../views/DistanceSaleAggrement.vue'
import WarrantyAndReturn from '../views/WarrantyAndReturn.vue'
import kulakliklar from '../views/kulakliklar.vue'
import Cart from '../views/Cart.vue'
import kablolar from '../views/kablolar.vue'
//import ProductDetail from '../views/ProductDetail.vue';

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
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/payment-delivery',
      name: 'PaymentAndDelivery',
      component: () => import('../views/PaymentAndDelivery.vue')
    },
    {
      path: '/privacy-security',
      name: 'PrivacyandSecurity',
      component: () => import('../views/PrivacyandSecurity.vue')
    },
    {
      path: '/distance-sale-agreement',
      name: 'DistanceSaleAgreement',
      component: () => import('../views/DistanceSaleAggrement.vue')
    },
    {
      path: '/warranty-return',
      name: 'WarrantyAnReturn',
      component: () => import('../views/WarrantyAndReturn.vue')
    },
    {
      path: '/kulakliklar',
      name: 'kulakliklar',
      component: () => import('../views/kulakliklar.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/kablolar',
      name: 'kablolar',
      component: () => import('../views/kablolar.vue')
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: () => import('../views/ProductDetail.vue')
    },
  ]
})

export default router
