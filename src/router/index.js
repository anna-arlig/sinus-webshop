import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Meny from '../views/Meny.vue'
import Cart from '../views/Cart.vue'
import OrderStatus from '../views/OrderStatus.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import Navigation from '../views/Navigation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/our-coffee',
    name: '',
    component: About
  },
  {
    path: '/meny',
    name: 'Meny',
    component: Meny
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/orderstatus',
    name: 'OrderStatus',
    component: OrderStatus
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: Navigation
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router