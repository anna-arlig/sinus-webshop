import Vue from 'vue' 
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import SingleProduct from '../views/SingleProduct.vue'
import Cart from '../views/Cart.vue'
import ProfileAccount from '../views/ProfileAccount.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/product/:id',
    name: 'SingleProduct',
    component: SingleProduct
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/account',
    name: 'ProfileAccount',
    component: ProfileAccount
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
