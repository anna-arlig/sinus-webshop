<template>
  <div class="products">
    <h1>Products</h1>
    <div class="buttons">
      <button @click="createProduct">Create a new product</button>
    </div>
    <CreateProduct v-if="create" />
  </div>
</template>

<script scoped>
import CreateProduct from "@/components/CreateProduct.vue";
export default {
  components: { CreateProduct },
  data() {
    return {
      create: false,
    };
  },
  methods: {
    createProduct() {
      this.create = !this.create;
    },
  },
};
</script>

<style></style>
