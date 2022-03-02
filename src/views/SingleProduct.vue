<template>
  <div class="single-product">
    <ProductItem v-if="product" large :product="product" />
  </div>
</template>

<script>
import ProductItem from "../components/productItem"
import Action from "../store/Action.types"
export default {
  async created() {
    if (!this.$store.state.products[this.productId]) {
      await this.$store.dispatch(Action.GET_ONE_PRODUCT, this.productId)
    }
  },

  components: {
    ProductItem,
  },
  data() {
    return {
      productId: this.$route.params.id,
    }
  },
  computed: {
    product() {
      return this.$store.state.products[this.$route.params.id]
    },
    productList() {
      return this.$store.state.productList
    },
  },
}
</script>

<style lang="scss" scoped>
.single-product {
  max-width: 1440px;
}
</style>
