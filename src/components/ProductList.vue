<template>
  <section class="product-list">
    <ProductItem small />
    <ProductItem small />
    <ProductItem small />
    <ProductItem small />
    <ProductItem small />
    <ProductItem small />
  </section>
</template>

<script>
import ProductItem from "../components/productItem"
export default {
  components: {
    ProductItem,
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  max-width: 85%;
  margin: 1rem auto 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
}
</style>
