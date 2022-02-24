<template>
  <section>
    <ul class="product-list">
      <li v-for="product in skateboards" :key="product.id">
        <ProductItem small :product="product" />
      </li>
    </ul>
  </section>
</template>

<script>
import ProductItem from "../components/productItem"
export default {
  components: {
    ProductItem,
  },
  props: {
    skateboards: Array,
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
  list-style: none;
}
</style>
