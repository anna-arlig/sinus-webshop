import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/API.js'
import Action from './Action.types'
import Mutation from './Mutations.types'
import SearchTerms from '@/assets/searchTerms.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [], 
    products: {}, 
    showLogIn: false,
    user: '',
    searchResults: [],
    searchTerms: [...SearchTerms],
  },
  mutations: {
    
    [Mutation.SAVE_PRODUCTS](state, fetchedProducts){
     
      state.productList.push(...fetchedProducts)
      for(let product of fetchedProducts){   
        Vue.set(state.products, product.id, product)   
      }
    }, 
    [Mutation.SAVE_USER](state, newUser){
      state.user = newUser

      state.logInPopup = !state.logInPopup
    },
    [Mutation.MODAL_TOGGLE](state) {
      state.showLogIn = !state.showLogIn
    },
    [Mutation.UPDATE_SEARCH_RESULTS](state, search) {
      //DENNA LÖSNING ANVÄNDER searchTerms.json. Bestäm om vi ska
      //göra det eller filtrera på category.

      if (search.length) {
        state.searchResults = state.searchTerms.filter((product) => {
          return product.toLowerCase().includes(search)
        })
      } else {
        state.searchResults = []
      }
    },
  },
  actions: {
    async [Action.GET_PRODUCTS](context){
    
      const response = await API.getProducts()
     
      context.commit(Mutation.SAVE_PRODUCTS, response.data.products)
    }, 
    async [Action.GET_USER](context, user){
      const response = await API.getUser(user)
      API.saveToken(response.data.token)
      context.commit(Mutation.SAVE_USER, response)
      context.commit(Mutation.MODAL_TOGGLE)
      
    },
    [Action.TOGGLE_MODAL](context) {
      context.commit(Mutation.MODAL_TOGGLE)
    },
    [Action.UPDATE_SEARCH_RESULTS](context, search) {
      context.commit(Mutation.UPDATE_SEARCH_RESULTS, search)
    },
    async [Action.CREATE_USER](context, newUser){
      const response = await API.createUser(newUser)
      context
      console.log(response);
    }
    
  },
  getters: {
    products(state){
      return state.productList
    }
  },
  modules: {},
})
