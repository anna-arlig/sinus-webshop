<template>
  <div class="products">
    <h1>Products</h1>
    <p>
      Click the button if you want to add a new product. If you want to view,
      edit och delete a product, select a category.
    </p>
    <CreateProduct v-if="create" @close="createProduct" />
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
        <p>Product id: {{ product.id }}</p>
        <div class="buttons">
          <button class="icon-btn" @click="removeProduct(product.id)">
            <Icon icon="ci:trash-empty" color="#bf3600" />
          </button>
          <button class="icon-btn" @click="editProduct(product.id)">
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
export default {
  components: { CreateProduct, Icon },
  data() {
    return {
      BASE_URL: process.env.VUE_APP_BASE_URL,
      create: false,
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
    createProduct() {
      this.create = !this.create;
    },
    getCategory() {
      this.$store.dispatch(Action.GET_CATEGORY, this.categoryTitel);
    },
    removeProduct(id) {
      this.$store.dispatch(Action.REMOVE_PRODUCT, id);
    },
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

p:first-of-type {
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
