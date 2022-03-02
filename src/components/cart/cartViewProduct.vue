<template>
  <div class="cart-product">
    <figure>
      <img
        class="product-img"
        :src="`${BASE_URL}/images/${inCartItem.imgFile}`"
        alt="placeholder for product image"
      />
    </figure>
    <div class="product-name">
      <div>
        <p class="category">{{inCartItem.category.toUpperCase()}} -</p>
        <p class="title">{{inCartItem.title}}</p>
      </div>
    </div>
    <p class="price">{{inCartItem.price}} kr</p>
    <div class="qty-container">
      <div class="quantity">
        <button
          class="qty-btn"
          @click="decrease(productInCart)"
        >
          <Icon
            
            icon="akar-icons:minus"
            color="#006a72"
            width="9"
          />
        </button>
        <p class="quantity-paragraph">{{productInCart.amount}}</p>
        <button
          class="qty-btn"
          @click="increase(productInCart)"
        >
          <Icon
            icon="akar-icons:plus"
            color="#006a72"
            width="9"
          />
        </button>
      </div>
    </div>

    <div class="total">
      <p>{{totalPriceForSingleItems}} kr</p>
      <button @click="removeFromCart(productInCart.id)">
        <Icon icon="ci:trash-empty" color="#bf3600" />
      </button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import Action from '@/store/Action.types.js'
export default {
  props: ['productInCart'],
  data(){return{
    BASE_URL: process.env.VUE_APP_BASE_URL
  }},
  components: {
    Icon,
  },
  computed: {
    inCartItem(){
      return this.$store.state.products[this.productInCart.id]
    },
    totalPriceForSingleItems(){
    return this.productInCart.amount * this.inCartItem.price
    }, 
    
  }, 
  methods: {
    removeFromCart(id){
      this.$store.dispatch(Action.REMOVE_FROM_CART, id)
    },
    decrease(productInCart){
      if(productInCart.amount > 1){
        this.$store.dispatch(Action.UPDATE_CART, {id: productInCart.id, amount: productInCart.amount-1})
      }
    },
    increase(productInCart){
      this.$store.dispatch(Action.UPDATE_CART, {id: productInCart.id, amount: productInCart.amount+1})
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";
figure{
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  img{
    max-width: 100%;
    max-height: 100%;
  }
}
p {
  font-size: 12px;
}

.cart-product {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 0.8fr 1fr 1.3fr;
  p {
    @include flex-center;
  }
}

.product-name {
  @include flex-center;
  p {
    margin: 0px;
  }
}

.qty-container {
  @include flex-center;
}

.quantity {
  @include flex-center;
  justify-content: space-evenly;
  min-width: 52px;
  border: 1px solid $neutral;
  border-radius: 3px;
  max-height: 24px;
  background-color: #f6f7f8;
}

.total {
  @include flex-center;
  margin: 10px;
  p {
    margin: 10px;
  }
}
button{
  background: none;
	color: inherit;
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  display: flex;
  justify-content: center;
}
</style>
