<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <main>
      <div class="cart-items">
        <div class="headers">
          <p>PRODUCT</p>
          <p>PRICE</p>
          <p>QTY</p>
          <p>TOTAL PRICE</p>
        </div>
        <CartViewProduct
          v-for="product in cart"
          :key="product.id"
          class="cart-product"
        />
      </div>
      <div class="checkout">
        <div class="subtotal">
          <p><strong>SUBTOTAL</strong></p>
          <p><strong>150 kr</strong></p>
        </div>
        <div class="shipping-fee">
          <p>SHIPPING FEE</p>
          <p>20 kr</p>
        </div>
        <p class="tax">TAX INCLUDED</p>

        <div class="total">
          <p><strong>TOTAL</strong></p>
          <p><strong>170 kr</strong></p>
        </div>
        <router-link to="/checkout">
          <button>CHECKOUT</button>
        </router-link>
      </div>
    </main>
    <Carousel v-if="carousel" />
  </div>
</template>

<script>
import CartViewProduct from "@/components/cartViewProduct.vue"
import Carousel from "@/components/carousel.vue"
export default {
  components: { CartViewProduct, Carousel },
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
    }
  },
}
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
  min-width: 55%;
  margin-left: 30px;
}

.checkout {
  min-width: 30%;
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
  display: grid;
  text-align: center;
  grid-template-columns: 2fr 0.8fr 1fr 1.3fr;
  p:first-of-type {
    text-align: left;
  }
  p {
    margin: 15px;
  }
}

.subtotal,
.shipping-fee,
.total {
  @include flex-center;
  justify-content: space-between;
}

.shipping-fee {
  p {
    margin: 0px;
  }
}

.total {
  p {
    margin: 0px;
  }
}
.tax {
  border-bottom: 1px solid $teal;
  margin-top: 60px;
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
