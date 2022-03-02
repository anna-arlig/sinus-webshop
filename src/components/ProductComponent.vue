<template>
  <div>
    <div class="product-item">
      <img
        :src="`${BASE_URL}/images/${product.imgFile}`"
        width="40"
        alt="Product image"
      />
      <div class="info">
        <p>
          <strong>{{ product.category }}</strong>
        </p>
        <p>
          <strong>- {{ product.title }}</strong>
        </p>
      </div>

      <ConfirmDelete
        v-if="showRemove == product.id"
        @closeDelete="showRemove = null"
        @removeProduct="removeProduct(product.id)"
        class="delete"
      />
      <EditProduct
        v-if="edit == product.id"
        @close="edit = !edit"
        :product="product"
      />
      <p>Product id: {{ product.id }}</p>
      <div class="buttons">
        <button class="icon-btn" @click="showRemove = product.id">
          <Icon icon="ci:trash-empty" color="#bf3600" />
        </button>
        <button class="icon-btn" @click="edit = product.id">
          <Icon icon="clarity:edit-solid" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmDelete from "@/components/ConfirmDelete.vue";
import { Icon } from "@iconify/vue2";
import EditProduct from "@/components/EditProduct.vue";
import Action from "../store/Action.types";
export default {
  props: ["product"],
  components: { ConfirmDelete, Icon, EditProduct },
  methods: {
    removeProduct(id) {
      this.$store.dispatch(Action.REMOVE_PRODUCT, id);
      this.showRemove = false;
    },
  },
  data() {
    return {
      showRemove: null,
      edit: null,
      BASE_URL: process.env.VUE_APP_BASE_URL,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

.product-item {
  @include flex-center;
  justify-content: space-around;
  border: 1px solid $teal;
  margin: 20px;
  padding: 15px;
  p:first-of-type {
    text-transform: uppercase;
  }
}

.icon-btn {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin-left: 10px;
}
</style>
