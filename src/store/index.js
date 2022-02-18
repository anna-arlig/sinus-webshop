import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/mock.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemList: [],
    items: {}
  },
  mutations: {
    savePosts(state, items){
      for(let item of items){
        state.postList.push(item)   
        Vue.set(state.items, item.id, item)   
      }
    }
  },
  actions: {
    async fetchItems(context){
      const response = await API.fetchItems()
      context.commit(Mutations.SAVE_POSTS, response)
    }
  },
  modules: {
  }
})
