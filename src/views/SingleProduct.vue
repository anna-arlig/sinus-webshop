<template>
  <div class="single-product">
    <ProductItem large :product="product" />
  </div>
</template>

<script>
import ProductItem from "../components/productItem"
export default {
  // beforRouteUpdate() {
  //   this.$router.push({ path: `/product/${this.$route.params.id}` })
  // },

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
