<template>
  <div class="products">
    <h1>Products</h1>
    <p class="intro-text">
      Click the button if you want to add a new product. If you want to view,
      edit och delete a product, select a category.
    </p>
    <CreateProduct v-if="create" @close="create = false" />
    <button @click="create = true" class="create-btn">
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

      <ProductComponent
        v-for="product in selectedCategoryProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Action from "../store/Action.types";
import CreateProduct from "@/components/CreateProduct.vue";
import ProductComponent from "@/components/ProductComponent.vue";

export default {
  components: {
    CreateProduct,
    ProductComponent,
  },
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
    getCategory() {
      this.$store.dispatch(Action.GET_CATEGORY, this.categoryTitel);
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

.intro-text {
  margin: 20px;
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

label {
  font-family: $paragraph;
  margin-bottom: 10px;
}
</style>
