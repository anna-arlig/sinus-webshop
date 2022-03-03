<template>
  <section class="product-list">
    <router-link
      :to="`/product/${product.id}`"
      v-for="product in categoryProducts"
      :key="product.id"
    >
      <ProductItem small :product="product" />
    </router-link>
  </section>
</template>

<script>
import ProductItem from "@/components/products/productItem"
export default {
  components: {
    ProductItem,
  },
  props: {
    categoryProducts: Array,
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
a {
  text-decoration: none;
  color: #312f30;
}
</style>
