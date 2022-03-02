import Vue from "vue"
import Vuex from "vuex"
import * as API from "@/api/API.js"
import Action from "./Action.types"
import Mutation from "./Mutations.types"
import SearchTerms from "@/assets/searchTerms.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [],
    products: {},
    showLogIn: false,
    searchResults: [],
    searchTerms: [...SearchTerms],
    user: {
      name: "",
      email: "",
      role: "",
      address: {
        street: "",
        zip: "",
        city: "",
      },
    },
    loginError: '',
    cart: [], 
    deliveryFee: 0,
    orders: []
  },
  mutations: {

    [Mutation.SAVE_NEW_PRODUCT](state, newProduct){
      state.productList.push(newProduct)
    },

    // [Mutation.UPDATE_PRODUCT_IN_STATE](state, editedProduct){
    //   const index = state.productList.findIndex(obj => obj.id == editedProduct.id)
    //   console.log(state.productList[index])
    //   state.productList[index] = editedProduct
    //   console.log(state.productList[index])
    // },

    [Mutation.REMOVE_PRODUCT_FROM_STATE](state, id){
     state.productList = state.productList.filter(product => product.id != id)
    },

    [Mutation.SAVE_ALL_ORDERS](state, orders){
      state.orders = orders},

    [Mutation.SAVE_ERROR](state, error){
      state.loginError = error
    },

    [Mutation.UPDATE_ORDER](state, {id, status}){
    const index = state.orders.findIndex(obj => obj.id == id)
    state.orders[index].status = status
      
    },

    [Mutation.SAVE_PRODUCTS](state, fetchedProducts) {
      for (let product of fetchedProducts) {
        if (!state.productList.find((prod) => prod.id === product.id)) {
          state.productList.push(product)
        }
        Vue.set(state.products, product.id, product)
      }
    },

    [Mutation.SET_ROLE](state, role) {
      state.user.role = role
      state.logInPopup = !state.logInPopup
    },

    [Mutation.SAVE_USER](state, user) {
      state.user = user
    },

    [Mutation.MODAL_TOGGLE](state) {
      state.loginError = ''
      state.showLogIn = !state.showLogIn
    },

    [Mutation.UPDATE_SEARCH_RESULTS](state, search) {
      if (search.length) {
        state.searchResults = state.searchTerms.filter((product) => {
          return product.name.toLowerCase().includes(search)
        })
      } else {
        state.searchResults = []
      }
    },

    [Mutation.LOG_OUT](state) {
      state.user = {
        name: "",
        email: "",
        role: "",
        address: {
          street: "",
          zip: "",
          city: "",
        },
      }
    },

    [Mutation.SAVE_PRODUCT_IN_CART](state, product) {
      const inCart = state.cart.find((cartItem) => cartItem.id == product.id)
      if (inCart) {
        inCart.amount++
      } else {
        state.cart.push({ id: product.id, amount: 1 })
      }
    },

    [Mutation.UPDATE_CART_ITEM](state, { id, amount }) {
      const inCart = state.cart.find((cartItem) => cartItem.id == id)
      inCart.amount = amount
    },

    [Mutation.REMOVE_CART_ITEM](state, id) {
      const item = state.cart.find((cartItem) => cartItem.id == id)
      const itemIndex = state.cart.indexOf(item)
      state.cart.splice(itemIndex, 1)
    },

    [Mutation.REMOVE_ALL_CART_ITEMS](state) {
      state.cart = []
    },

    [Mutation.UPDATE_DELIVERY](state, shippingFee) {
      state.deliveryFee = Number(shippingFee)
    },
  },
  
  actions: {

    [Action.UPDATE_ORDER](context, status){
      context.commit(Mutation.UPDATE_ORDER, status)
    },

    async [Action.CREATE_PRODUCT](context, newProduct){
      await API.addProduct(newProduct)
      context.commit(Mutation.SAVE_NEW_PRODUCT, newProduct)
    },

    async [Action.UPDATE_PRODUCT](context, editedProduct){
      await API.updateProduct(editedProduct)
      context.commit(Mutation.UPDATE_PRODUCT_IN_STATE, editedProduct)
    },

    async [Action.REMOVE_PRODUCT](context, id){
    await API.removeProduct(id)
    context.commit(Mutation.REMOVE_PRODUCT_FROM_STATE, id)
    },

    async [Action.CHANGE_STATUS](_,status){
      await API.updateOrder(status)
    },

    async [Action.GET_ALL_ORDERS](context){
      const response = await API.getAllOrders()
      context.commit(Mutation.SAVE_ALL_ORDERS, response.data)
    },

    [Action.EMPTY_CART](context) {
      context.commit(Mutation.REMOVE_ALL_CART_ITEMS)
    },

    [Action.REMOVE_FROM_CART](context, id) {
      context.commit(Mutation.REMOVE_CART_ITEM, id)
    },

    [Action.UPDATE_CART](context, { id, amount }) {
      context.commit(Mutation.UPDATE_CART_ITEM, { id, amount })
    },

    [Action.ADD_TO_CART](context, product) {
      context.commit(Mutation.SAVE_PRODUCT_IN_CART, product)
    },

    async [Action.GET_PRODUCTS](context) {
      const response = await API.getProducts()
      context.commit(Mutation.SAVE_PRODUCTS, response.data)
    },

    async [Action.LOG_IN](context, user) {
      const response = await API.logIn(user)
        if(response.data.error){
          console.log(response.data.error)
          context.commit(Mutation.SAVE_ERROR, response.data.error)
        }
        else{
          API.saveToken(response.data.token)
          context.dispatch(Action.GET_ME)
          context.commit(Mutation.MODAL_TOGGLE)
          context.commit(Mutation.SAVE_ERROR, '')
        }
      
    },
    async [Action.UPDATE_USER_INFO](context, userInfo) {
      await API.updateUserInfo(userInfo)

      userInfo.role = context.state.user.role
      userInfo.name = context.state.user.name
      context.commit(Mutation.SAVE_USER, userInfo)
    },

    async getUserInfo(context) {
      const response = await API.getMe()
      context.commit(Mutation.SAVE_USER, response.data)
    },

    async [Action.GET_ME](context) {
      const response = await API.getMe()
      context.commit(Mutation.SET_ROLE, response.data.role)
    },

    async [Action.GET_CATEGORY](context, query) {
      const response = await API.getCategory(query)
      context.commit(Mutation.SAVE_PRODUCTS, response.data)
    },

    [Action.TOGGLE_MODAL](context) {
      context.commit(Mutation.MODAL_TOGGLE)
    },

    [Action.UPDATE_SEARCH_RESULTS](context, search) {
      context.commit(Mutation.UPDATE_SEARCH_RESULTS, search)
    },

    async [Action.CREATE_USER](_, newUser) {
      await API.createUser(newUser)
    },

    async [Action.CREATE_ORDER](_, items) {
      await API.saveOrder(items)
    },

    async [Action.MARKUS_SEARCH](context, search) {
      if (search.type == "category") {
        const response = await API.categorySearch(search.searchWord)

        context.commit(Mutation.SAVE_PRODUCTS, response.data)
      } else {
        const response = await API.markusSearch(search.searchWord)
        context.commit(Mutation.SAVE_PRODUCTS, response.data)
      }
    },

    async [Action.SEARCH_ITEMS](context, searchString) {
      const response = await API.searchItems(searchString)
      context.commit(Mutation.SAVE_PRODUCTS, response.data)
    },
    [Action.LOG_OUT](context) {
      API.clearToken("")
      context.commit(Mutation.LOG_OUT)
    },
    [Action.UPDATE_DELIVERY](context, shippingFee) {
      context.commit(Mutation.UPDATE_DELIVERY, shippingFee)
    },
  },

  getters: {
    idsOfCartItems(state) {
      return state.cart.map((item) => item.id)
    },
    subTotalForCheckout(state) {
      return state.cart.reduce((sum, cartItem) => {
        return sum + cartItem.amount * state.products[cartItem.id].price
      }, 0)
    },
    costIncludingShipping(state, getters) {
      return getters.subTotalForCheckout + state.deliveryFee
    },
    specialEdition(state) {
      return state.productList.filter((product) => product.specialEdition)
    },
    skateboards(state) {
      const skateboards = state.productList.filter((prod) => {
        return prod.category === "skateboard"
      })
      return skateboards
    },
    apparel(state) {
      const apparel = state.productList.filter((prod) => {
        return prod.category === "hoodie" || prod.category === "tshirt"
      })
      return apparel
    },
    accessories(state) {
      const accessories = state.productList.filter((prod) => {
        return (
          prod.category === "cap" ||
          prod.category === "socks" ||
          prod.category === "totebag" ||
          prod.category === "wheel"
        )
      })
      return accessories
    },
  },
  modules: {},
})
