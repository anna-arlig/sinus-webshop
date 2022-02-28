<template>
  <div class="products">
    <h1>Products</h1>
    <p class="intro-text">
      Click the button if you want to add a new product. If you want to view,
      edit och delete a product, select a category.
    </p>
    <CreateProduct v-if="create" @close="create = false" />
    <button @click="createProduct" class="create-btn">
      Create a new product
    </button>
    <div class="select">
      <label for="categories">Select a category</label>
      <select name="categories" @change="getCategory" v-model="categoryTitel">
        <option value="Skateboards">Skateboards</option>
        <option value="Apparel">Apparel</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>
    <div class="product-list">
      <h2>{{ categoryTitel }}</h2>

      <div
        class="product-item"
        v-for="product in selectedCategoryProducts"
        :key="product.id"
      >
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
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import Action from "../store/Action.types";
import CreateProduct from "@/components/CreateProduct.vue";
import ConfirmDelete from "@/components/ConfirmDelete.vue";
import EditProduct from "@/components/EditProduct.vue";
export default {
  components: { CreateProduct, Icon, ConfirmDelete, EditProduct },
  data() {
    return {
      BASE_URL: process.env.VUE_APP_BASE_URL,
      create: false,
      edit: null,
      showRemove: null,
      categoryTitel: "",
    };
  },
  computed: {
    selectedCategoryProducts() {
      if (this.categoryTitel === "Skateboards") {
        return this.$store.getters.skateboards;
      } else if (this.categoryTitel === "Apparel") {
        return this.$store.getters.apparel;
      } else {
        return this.$store.getters.accessories;
      }
    },
  },
  methods: {
    createProduct() {},
    getCategory() {
      this.$store.dispatch(Action.GET_CATEGORY, this.categoryTitel);
    },
    removeProduct(id) {
      this.$store.dispatch(Action.REMOVE_PRODUCT, id);
      this.showRemove = false;
    },
    editProduct() {},
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

h1,
h2 {
  margin-left: 20px;
}

.intro-text {
  margin: 20px;
}

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

.select {
  @include flex-col-center;
}

.create-btn {
  border: 1px solid $teal;
  background-color: $teal;
  color: white;
  border-radius: 3px;
  text-transform: uppercase;
  min-width: 182px;
  min-height: 35px;
  margin: 15px;
  margin-top: 40px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(1.1);
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

label {
  font-family: $paragraph;
  margin-bottom: 10px;
}
</style>
