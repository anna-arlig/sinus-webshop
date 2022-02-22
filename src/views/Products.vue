<template>
  <div class="products">
    <div class="category-title">
      <h1>Apparel / Hoodies</h1>
      <div class="first-line"></div>
    </div>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "../components/ProductList"
export default {
  components: {
    ProductList,
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

.products {
  max-width: 1440px;

  .category-title {
    width: 85%;
    margin: 5rem auto 2rem;
    letter-spacing: 1px;

    h1 {
      margin: 0;
    }

    .first-line {
      width: 50%;
      height: 2px;
      background-color: $teal;
    }
  }
}
</style>
