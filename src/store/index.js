import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/mock.js'
import Action from './Action.types'
import Mutation from './Mutations.types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemList: [],
    items: {}, 
    productList: [], 
    products: {}, 
    user: '', 
    logInPopup: false
  },
  mutations: {
    savePosts(state, items){
      for(let item of items){
        state.postList.push(item)   
        Vue.set(state.items, item.id, item)   
      }
    }, 
    [Mutation.SAVE_PRODUCTS](state, fetchedProducts){      
      state.productList.push(fetchedProducts)
      Vue.set(state.products, 1, fetchedProducts)
    }, 
    [Mutation.SAVE_USER](state, newUser){
      state.user = newUser
    }, 
    [Mutation.LOG_IN_TOGGLE](state){
      state.logInPopup = !state.logInPopup
    }
  },
  actions: {
    async fetchItems(context){
      const response = await API.fetchItems()
      context.commit('savePosts', response)
    },
    async [Action.GET_PRODUCTS](context){
      const response = await API.getProducts()
      context.commit(Mutation.SAVE_PRODUCTS, response)
    }, 
    async [Action.GET_USER](context, user){
      const response = await API.getUser(user)
      context.commit(Mutation.SAVE_USER, response)
    }, 
    [Action.TOGGLE_LOGIN](context){
      context.commit(Mutation.LOG_IN_TOGGLE)
    }
  },
  modules: {
  }
})
