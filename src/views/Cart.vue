<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <main>
      <div class="cart-items">
        <div class="headers">
          <div class="left-part">
            <p>PRODUCT</p>
          </div>
          <div class="right-part">
            <p>PRICE</p>
            <p>QTY</p>
            <p>TOTAL PRICE</p>
          </div>
        </div>
        <CartProduct
          v-for="product in cart"
          :key="product.id"
          class="cart-product"
        />
      </div>
      <div class="checkout">
        <div class="subtotal">
          <p>SUBTOTAL</p>
          <p>$150</p>
        </div>
        <div class="shipping-fee">
          <p>SHIPPING FEE</p>
          <p>$20</p>
        </div>
        <p class="tax">TAX INCLUDED</p>

        <div class="total">
          <p><strong>TOTAL</strong></p>
          <p><strong>$170</strong></p>
        </div>

        <button>CHECKOUT</button>
      </div>
    </main>
    <Carousel v-if="carousel" />
  </div>
</template>

<script>
import CartProduct from "@/components/cartProduct.vue";
import Carousel from "@/components/carousel.vue";
export default {
  components: { CartProduct, Carousel },
  data() {
    return {
      carousel: false,
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

<style lang="scss" scoped>
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

h2 {
  margin-left: 60px;
}

main {
  display: flex;
  justify-content: space-around;
}

.cart-items {
  min-width: 538px;
  margin-left: 30px;
}

.checkout {
  min-width: 237px;
  margin-right: 30px;
}

.cart-product {
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid $teal;
  margin-top: 20px;
  padding-bottom: 20px;
}

.headers {
  border-bottom: 1px solid $teal;
  @include flex-center;
  justify-content: space-between;
  p {
    margin: 15px;
  }
}
.right-part,
.subtotal,
.shipping-fee,
.total {
  @include flex-center;
  justify-content: space-between;
}

.tax {
  border-bottom: 1px solid $teal;
}

button {
  border: 1px solid $teal;
  background-color: $teal;
  color: white;
  border-radius: 3px;
  text-transform: uppercase;
  min-width: 100%;
  min-height: 35px;
  margin: 5px;
  margin-top: 40px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
}
</style>
