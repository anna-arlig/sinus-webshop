<template>
  <div class="single-product">
    <productItem large />
    <productItem />
  </div>
</template>

<script>
import productItem from "../components/productItem"
export default {
  components: {
    productItem,
  },
}
</script>

<style lang="scss" scoped>
.single-product {
  max-width: 1440px;
}
</style>
