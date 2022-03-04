<template>
  <main class="order-product">
    <h2>{{ product.category }}</h2>
    <img
      :src="`${BASE_URL}/images/${product.imgFile}`"
      alt="image of product"
      height="100px"
    />
    <p>{{ product.title }}</p>
    <p>{{ product.price }} kr</p>
  </main>
</template>

<script>
import Action from "@/store/Action.types";
export default {
  created() {
    this.$store.dispatch(Action.GET_ONE_PRODUCT, this.item.ProductId);
  },
  data() {
    return {
      BASE_URL: process.env.VUE_APP_BASE_URL,
    };
  },
  props: ["item"],
  computed: {
    product() {
      return this.$store.state.products[this.item.ProductId];
    },
  },
};
</script>

<style></style>
