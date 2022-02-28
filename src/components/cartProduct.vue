<template>
  <div class="cartProduct">
    <div class="img-container">
      <img
        class="product-img"
        :src="`${BASE_URL}/images/${productObject.imgFile}`"
        alt="productObject.imgFile"
      />
    </div>
    <div class="info">
      <div class="info-part">
        <div>
          <p class="category">{{ productObject.category }} -</p>
          <p class="title">{{ productObject.title }}</p>
        </div>
        <button @click="removeFromCart(inCartProduct.id)">
          <Icon icon="ci:trash-empty" color="#bf3600" />
        </button>
      </div>
      <div class="info-part">
        <p class="price">{{ productObject.price }} kr</p>
        <div class="quantity">
          <button @click="decrease(inCartProduct)">
            <Icon class="qty-btn" icon="akar-icons:minus" color="#006a72" />
          </button>
          <p class="quantity-paragraph">{{ inCartProduct.amount }}</p>
          <button @click="increase(inCartProduct)" class="qty-btn">
            <Icon icon="akar-icons:plus" color="#006a72" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2"
import Action from "@/store/Action.types.js"
export default {
  props: ["inCartProduct"],
  components: {
    Icon,
  },
  data() {
    return {
      BASE_URL: process.env.VUE_APP_BASE_URL,
    }
  },
  methods: {
    removeFromCart(id) {
      this.$store.dispatch(Action.REMOVE_FROM_CART, id)
    },
    decrease(inCartProduct) {
      if (inCartProduct.amount > 1) {
        this.$store.dispatch(Action.UPDATE_CART, {
          id: inCartProduct.id,
          amount: inCartProduct.amount - 1,
        })
      }
    },
    increase(inCartProduct) {
      this.$store.dispatch(Action.UPDATE_CART, {
        id: inCartProduct.id,
        amount: inCartProduct.amount + 1,
      })
    },
  },
  computed: {
    productObject() {
      return this.$store.state.products[this.inCartProduct.id]
    },
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";
button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
.cartProduct {
  border: 1px solid $teal;
  border-radius: 5px;
  margin-bottom: 20px;
  @include flex-center;
  justify-content: space-between;
}
.info {
  min-width: 80%;
}
p {
  margin: 0px;
  font-weight: bold;
}
.quantity-paragraph {
  font-weight: normal;
  color: #0f201a;
}
.img-container {
  width: 5rem;
  height: 5rem;
  margin: 5px;
  @include flex-center;
  .product-img {
    max-width: 100%;
    max-height: 100%;
  }
}
.quantity {
  @include flex-center;
  justify-content: space-evenly;
  min-width: 104px;
  border: 1px solid $neutral;
  border-radius: 3px;
  max-height: 24px;
}
.quantity-paragraph {
  text-align: center;
  border-left: 1px solid $neutral;
  border-right: 1px solid $neutral;
  min-width: 40px;
}
.qty-btn {
  margin: 0px;
}
.info-part {
  margin-left: 30px;
  margin-right: 30px;
  @include flex-center;
  justify-content: space-between;
  p:first-child {
    text-transform: uppercase;
  }
}
</style>
