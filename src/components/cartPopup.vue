<template>
  <dialog open class="cartPopup">
    <h2>Your Cart</h2>
    <CartProduct v-for="product in cart" :key="product.id" />
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
    return {
      cart: [
        {
          id: 1337,
          title: "Gretas Fury",
          price: 999,
          specialEdition: true,
          imgFile: "skateboard-greta.png",
          amount: 0,
        },
        {
          id: 1338,
          title: "Eagle",
          price: 999,
          specialEdition: false,
          imgFile: "skateboard-greta.png",
          amount: 0,
        },
        {
          id: 1339,
          title: "Hat - purple",
          price: 59,
          specialEdition: false,
          imgFile: "skateboard-greta.png",
          amount: 0,
        },
      ],
    };
  },
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
