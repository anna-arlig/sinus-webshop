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
    logInPopup: false,
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
    [Mutation.LOG_IN_TOGGLE](state){
      state.logInPopup = !state.logInPopup

    },
    [Mutation.UPDATE_SEARCH_RESULTS](state, search){
     //DENNA LÖSNING ANVÄNDER searchTerms.json. Bestäm om vi ska 
     //göra det eller filtrera på category.

      if(search.length){
        state.searchResults = state.searchTerms.filter(product => {
          return product.toLowerCase().includes(search)
        })
      }
     
      
      else{
        state.searchResults = []
      }
      
    }
  },
  actions: {
    async fetchItems(context){
      const response = await API.fetchItems()
      context.commit('savePosts', response)
    },
    async [Action.GET_PRODUCTS](context){
    
      const response = await API.getProducts()
     
      context.commit(Mutation.SAVE_PRODUCTS, response.data.products)
    }, 
    async [Action.GET_USER](context, user){
      const response = await API.getUser(user)
      context.commit(Mutation.SAVE_USER, response)

    }, 
    [Action.TOGGLE_LOGIN](context){
      context.commit(Mutation.LOG_IN_TOGGLE)

    },
    [Action.UPDATE_SEARCH_RESULTS](context, search){
      context.commit(Mutation.UPDATE_SEARCH_RESULTS, search)
    },
    
  },
  getters: {
    products(state){
      return state.productList
    }
  },
  modules: {
  }
})
