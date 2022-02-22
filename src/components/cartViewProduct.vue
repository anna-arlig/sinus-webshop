<template>
  <div class="cart-product">
    <img
      class="product-img"
      src="@/assets/images/sinus-skateboard-plastic.png"
      alt="placeholder for product image"
    />
    <div class="product-name">
      <div>
        <p class="category">SINUS SKATEBOARD -</p>
        <p class="title">Northern lights</p>
      </div>
    </div>
    <p class="price">$85</p>
    <div class="qty-container">
      <div class="quantity">
        <Icon
          class="qty-btn"
          icon="akar-icons:minus"
          color="#006a72"
          width="6"
        />
        <p class="quantity-paragraph">1</p>
        <Icon
          class="qty-btn"
          icon="akar-icons:plus"
          color="#006a72"
          width="6"
        />
      </div>
    </div>

    <div class="total">
      <p>$85</p>
      <Icon icon="ci:trash-empty" color="#bf3600" />
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

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
</style>
