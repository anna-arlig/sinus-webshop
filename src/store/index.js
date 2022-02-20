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
    user: ''
  },
  mutations: {
    savePosts(state, items){
      for(let item of items){
        state.postList.push(item)   
        Vue.set(state.items, item.id, item)   
      }
    }, 
    [Mutation.SAVE_PRODUCTS](state, fetchedProducts){      
      state.productList.push(...fetchedProducts)
      Vue.set(state.products, fetchedProducts.page = 1, fetchedProducts)
    }, 
    [Mutation.SAVE_USER](state, newUser){
      state.user = newUser
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
    async [Action.GET_USER](context){
      const response = await API.getUser()
      context.commit(Mutation.SAVE_USER, response)
    }
  },
  modules: {
  }
})
