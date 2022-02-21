<template>
  <div class="single-product">
    <ProductItem large />
  </div>
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
.single-product {
  max-width: 1440px;
}
</style>
