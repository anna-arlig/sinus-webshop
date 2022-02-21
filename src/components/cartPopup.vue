<template>
  <div class="cartPopup">
    <CartProduct v-for="product in cart" :key="product.id" />
  </div>
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
.cartPopup {
  height: 200px;
  max-width: 408px;
  border: 1px solid $black;
  border-radius: 3px;
}
</style>
