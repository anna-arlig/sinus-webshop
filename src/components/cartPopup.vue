<template>
  <dialog open class="cartPopup">
    <h2>Your Cart</h2>
    <h3 v-if="!cart.length">Your cart is empty! 😞</h3>
    <CartProduct v-for="product in cart" :key="product.id" :inCartProduct="product"/>
    <span class="buttons">
      <button @click="emptyCart" class="empty-cart-btn">empty cart</button>
      <router-link to="/cart">
        <button class="cart-btn">Shopping cart</button>
      </router-link>
    </span>
  </dialog>
</template>

<script>
import CartProduct from "@/components/cartProduct.vue";
import Action from '@/store/Action.types.js'
export default {
  components: { CartProduct },
  computed:  {
    cart(){
      return this.$store.state.cart
    }
  }, 
  methods: {
    emptyCart(){
      this.$store.dispatch(Action.EMPTY_CART)
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

h2 {
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}
.cartPopup {
  min-width: 408px;
  border: 1px solid $black;
  border-radius: 3px;
  background-color: white;
  margin-right: 1rem;
  margin-top: 2rem;
}
button:active{  
  transform: scale(1.1);
}
.empty-cart-btn {
  background-color: #FFFFFF;
  color: $teal;
  &:hover{
    cursor: pointer;
    background-color: red;
    color: #000000;
    border: 1px solid $teal;
  }
}
.cart-btn {
  background-color: $teal;
  color: white;
  &:hover{
    cursor: pointer;
    background-color: #FFFFFF;
    color: $teal;
    border: 1px solid $teal;
  }
}

button {
  border: 1px solid $teal;
  border-radius: 3px;
  text-transform: uppercase;
  min-width: 182px;
  min-height: 35px;
  margin: 5px;
  margin-top: 40px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
}
.buttons {
  @include flex-center;
}
</style>
