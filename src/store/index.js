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
    user: null,
    searchResults: [],
    searchTerms: [...SearchTerms],
    cart: []
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
    [Mutation.SAVE_USER](state, newUser) {
      state.user = newUser
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
      state.user = null
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
      const itemExist = state.cart.find(cartItem => cartItem.id == id)
      const itemIndex = state.cart.indexOf(itemExist)
      state.cart.splice(itemIndex, 1)
    }, 
    [Mutation.REMOVE_ALL_CART_ITEMS](state){
      state.cart = []
    }
  },
  actions: {
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
    async [Action.GET_USER](context, user) {
      const response = await API.getUser(user)
      API.saveToken(response.data.token)
      const responseTwo = await API.getUserInfo()
      context.commit(Mutation.SAVE_USER, responseTwo)
      context.commit(Mutation.MODAL_TOGGLE)
    },
    async [Action.UPDATE_USER_INFO](context, userInfo){
      
      await API.updateUserInfo(userInfo)
      context
      
    },
    async getUserInfo(context){
      const response = await API.getUserInfo()
      console.log(response)
      context.commit(Mutation.SAVE_USER, response.data)
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

    async [Action.CREATE_USER](context, newUser) {
      const response = await API.createUser(newUser)
      context
      response
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
    products(state) {
      return state.productList
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
