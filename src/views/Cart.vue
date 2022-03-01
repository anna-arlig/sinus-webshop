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
          v-for="product in inCartItems"
          :key="product.id"
          class="cart-product"
          :productInCart="product"
        />
      </div>
      <div class="checkout">
        <div class="subtotal">
          <p><strong>SUBTOTAL</strong></p>
          <p>
            <strong>{{ subTotalForCheckout }} kr</strong>
          </p>
        </div>
        <div class="shipping-fee">
          <p>SHIPPING FEE</p>
          <p>{{ this.$store.state.deliveryFee }} kr</p>
        </div>
        <p class="tax">TAX INCLUDED</p>
        <div class="total">
          <p><strong>TOTAL</strong></p>
          <p>
            <strong>{{ costIncludingShipping }} kr</strong>
          </p>
        </div>
        <button @click="$router.push('/checkout')">CHECKOUT</button>
      </div>
    </main>
    <section class="carousel">
      <Carousel />
    </section>
  </div>
</template>

<script>
import CartViewProduct from "@/components/cartViewProduct.vue"
import Carousel from "@/components/carousel.vue"
export default {
  components: { CartViewProduct, Carousel },
  computed: {
    inCartItems() {
      return this.$store.state.cart
    },
    subTotalForCheckout() {
      return this.$store.getters.subTotalForCheckout
    },
    costIncludingShipping() {
      return this.$store.getters.costIncludingShipping
    },
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
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: $teal;
  }
}
.carousel {
  display: flex;
  justify-content: center;
  margin: 6rem 0 6rem;
}
</style>
