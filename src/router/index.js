import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Products from "../views/Products.vue"
import SingleProduct from "../views/SingleProduct.vue"
import Cart from "../views/Cart.vue"
import ProfileAccount from "../views/ProfileAccount.vue"
import Checkout from "../views/Checkout.vue"
import AdminView from "../views/AdminView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products/:category",
    name: "Products",
    component: Products,
  },
  {
    path: "/product/:id",
    name: "SingleProduct",
    component: SingleProduct,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/account",
    name: "ProfileAccount",
    component: ProfileAccount,
  },
  {
    path: "/admin",
    name: "AdminView",
    component: AdminView,
  },
]

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
