<template>
  <div class="single-product">
    <ProductItem large :product="product" />
  </div>
</template>

<script>
import ProductItem from "../components/productItem"
export default {
  components: {
    ProductItem,
  },
  computed: {
    product() {
      return this.$store.getters.products.find(
        (prod) => prod.id == this.$route.params.id
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.single-product {
  max-width: 1440px;
}
</style>
