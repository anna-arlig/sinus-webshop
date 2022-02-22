<template>
  <div class="cartProduct">
    <img
      class="product-img"
      src="@/assets/images/sinus-skateboard-plastic.png"
      alt="placeholder for product image"
    />
    <div class="info">
      <div class="info-part">
        <div>
          <p class="category">SINUS SKATEBOARD -</p>
          <p class="title">Northern lights</p>
        </div>
        <Icon icon="ci:trash-empty" color="#bf3600" />
      </div>
      <div class="info-part">
        <p class="price">$85</p>
        <div class="quantity">
          <Icon class="qty-btn" icon="akar-icons:minus" color="#006a72" />
          <p class="quantity-paragraph">1</p>
          <Icon class="qty-btn" icon="akar-icons:plus" color="#006a72" />
        </div>
      </div>
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

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

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
.product-img {
  margin-left: 30px;
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
}
</style>
