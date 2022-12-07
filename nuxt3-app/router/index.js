import { createRouter, createWebHashHistory } from 'vue-router'
/* import Index from '../views/index.vue'
import Cart from '../views/cart.vue'
import Contact from '../views/contact.vue'
import Kulakliklar from '../views/kulakliklar.vue'
import LoginPage from '../views/loginPage.vue'
import Product from '../views/product.vue'
import DistanceSalesAgreement from '../views/distanceSalesAgreementPage'
import Kablolar from '../views/kablolar.vue'
import PaymentAndDelivery from '../views/paymentAndDeliveryPage.vue'
import PrivacyAndSecurity from '../views/privacyAndSecurityPage.vue'
import WarrantyAndReturn from '../views/warrantyAndReturnPage.vue' */

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: () => import(/* webpackChunkName: "index" */ '@/views/index.vue')
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import(/* webpackChunkName: "cart" */ '@/views/cart.vue')
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/contact.vue')
  },
  {
    path: '/kulakliklar',
    name: 'KulakliklarPage',
    component: () => import(/* webpackChunkName: "kulakliklar" */ '@/views/kulakliklar.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import(/* webpackChunkName: "login" */ '@/views/loginPage.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: () => import(/* webpackChunkName: "product" */ '@/views/product.vue')
  },
  {
    path: '/distanceSalesAgreement',
    name: 'DistanceSalesAgreementPage',
    component: () => import(/* webpackChunkName: "distanceSalesAgreement" */ '@/views/distanceSalesAgreementPage.vue')
  },
  {
    path: '/kablolar',
    name: 'KablolarPage',
    component: () => import(/* webpackChunkName: "kablolar" */ '@/views/kablolar.vue')
  },
  {
    path: '/paymentAndDelivery',
    name: 'PaymentAndDeliveryPage',
    component: () => import(/* webpackChunkName: "paymentAndDelivery" */ '@/views/paymentAndDeliveryPage.vue')
  },
  {
    path: '/privacyAndSecurity',
    name: 'PrivacyAndSecurityPage',
    component: () => import(/* webpackChunkName: "privacyAndSecurity" */ '@/views/privacyAndSecurityPage.vue')
  },
  {
    path: '/warrantyAndReturn',
    name: 'WarrantyAndReturnPage',
    component: () => import(/* webpackChunkName: "warrantyAndReturn" */ '@/views/warrantyAndReturnPage.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
