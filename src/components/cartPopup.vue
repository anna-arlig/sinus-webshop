<template>
  <dialog open class="cartPopup">
    <h2>Your Cart</h2>
    <CartProduct v-for="product in cart" :key="product.id" :inCartProduct="product"/>
    <span class="buttons">
      <button class="continue-btn">Continue Shopping</button>
      <button class="cart-btn">Shopping cart</button>
    </span>
  </dialog>
</template>

<script>
import CartProduct from "@/components/cartProduct.vue";
export default {
  components: { CartProduct },
  data() {
    return {   };
  },
  computed:  {
    cart(){
      return this.$store.state.cart
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
  margin-right: 15rem;
  margin-top: 2rem;
}
.continue-btn {
  background-color: white;
  color: $teal;
}
.cart-btn {
  background-color: $teal;
  color: white;
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
