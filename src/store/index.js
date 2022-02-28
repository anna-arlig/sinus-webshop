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
    role: "",
    searchResults: [],
    searchTerms: [...SearchTerms],
    cart: [], 
    deliveryMethod: [
      {
        name: 'fedex', 
        price: 20, 
        active: true
      }, 
      {
        name: 'ups', 
        price: 30, 
        active: false
      }, 
      {
        name: 'dhl', 
        price: 15,
        active: false
      }
    ]
  },
  mutations: {
    [Mutation.SAVE_PRODUCTS](state, fetchedProducts) {
      for (let product of fetchedProducts) {
        if (!state.productList.find((prod) => prod.id === product.id)) {
          state.productList.push(product)
        }
        Vue.set(state.products, product.id, product)
      }
    },
    [Mutation.SET_ROLE](state, role) {
      state.role = role
      state.logInPopup = !state.logInPopup
    },
    [Mutation.MODAL_TOGGLE](state) {
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
      state.role = ""
    },
    [Mutation.SAVE_PRODUCT_IN_CART](state, product){
      const inCart = state.cart.find(cartItem => cartItem.id == product.id)
      if(inCart){
        inCart.amount++
      }else{
        state.cart.push({id: product.id, amount: 1})
      }
    }, 
    [Mutation.UPDATE_CART_ITEM](state, {id, amount}){
      const inCart = state.cart.find(cartItem => cartItem.id == id)
      inCart.amount = amount
    }, 
    [Mutation.REMOVE_CART_ITEM](state, id){
      const item = state.cart.find(cartItem => cartItem.id == id)
      const itemIndex = state.cart.indexOf(item)
      state.cart.splice(itemIndex, 1)
    }, 
    [Mutation.REMOVE_ALL_CART_ITEMS](state){
      state.cart = []
    }
  },
  actions: {

    async [Action.GET_ALL_ORDERS](){
      const response = await API.getAllOrders()
      console.log(response)
    },

    [Action.EMPTY_CART](context){
      context.commit(Mutation.REMOVE_ALL_CART_ITEMS)
    },
    [Action.REMOVE_FROM_CART](context, id){
      context.commit(Mutation.REMOVE_CART_ITEM, id)
    },
    [Action.UPDATE_CART](context, {id, amount}){
      context.commit(Mutation.UPDATE_CART_ITEM, {id, amount})
    },
    [Action.ADD_TO_CART](context, product){
      context.commit(Mutation.SAVE_PRODUCT_IN_CART, product)
    },
    async [Action.GET_PRODUCTS](context) {
      const response = await API.getProducts()
      context.commit(Mutation.SAVE_PRODUCTS, response.data)
    },
    async [Action.LOG_IN](context, user) {
      const response = await API.logIn(user)
      API.saveToken(response.data.token)
      context.dispatch(Action.GET_ME)
      context.commit(Mutation.MODAL_TOGGLE)
    },

    async [Action.GET_ME](context){
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

    async [Action.MARKUS_SEARCH](context, search){
      if(search.type == 'category'){
        const response = await API.categorySearch(search.searchWord)
        
        context.commit(Mutation.SAVE_PRODUCTS, response.data)
      }
      else{
        const response = await API.markusSearch(search.searchWord)
        context.commit(Mutation.SAVE_PRODUCTS, response.data)
      }
      
    }, 
  
    async [Action.SEARCH_ITEMS](context, searchString) {
      const response = await API.searchItems(searchString)
      context.commit(Mutation.SAVE_PRODUCTS, response.data)
    },
    [Action.LOG_OUT](context) {
      API.clearToken()
      context.commit(Mutation.LOG_OUT)
    },
  },


  getters: {
    subTotalForCheckout(state){
      return state.cart.reduce((sum, cartItem) => {
        return sum + cartItem.amount * state.products[cartItem.id].price
      }, 0)
    },
    costIncludingShipping(state, getters){
      return getters.subTotalForCheckout + state.deliveryMethod.find(method => method.active).price
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
