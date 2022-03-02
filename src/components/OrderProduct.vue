<template>
  <main class="order-product">
      
          <p>{{product.title}}</p>
      
      
  </main>
</template>

<script>
import Action from "../store/Action.types"
export default {
    mounted(){
    this.$store.dispatch(Action.GET_ITEM, item.ProductId)
  },
    props:['item'],
    computed:{
       
        product(){
      
      return this.$store.state.products[item.ProductId]
    }
}
}
</script>

<style>

</style>