<template>
  <div class="products">
    <div class="category-title">
      <h1>{{ categoryTitel }}</h1>
      <div class="first-line"></div>
    </div>
    <h3 v-if="error">{{ error }}</h3>
    <ProductList :categoryProducts="selectedCategoryProducts" />
  </div>
</template>

<script>
import ProductList from "@/components/products/ProductList"
import Action from "@/store/Action.types"
export default {
  mounted() {
    if (this.categoryTitel != "Special Edition")
      this.$store.dispatch(Action.GET_CATEGORY, this.$route.params.category)
  },
  beforeRouteUpdate(to, from, next) {
    this.categoryTitel = to.params.category
    if (this.categoryTitel != "Special Edition") {
      this.$store.dispatch(Action.GET_CATEGORY, to.params.category)
      this.$store.dispatch(Action.CLEAR_ERROR_ON_PAGE)
      next()
    } else {
      this.$store.dispatch(Action.CLEAR_ERROR_ON_PAGE)
      next()
    }
  },
  components: {
    ProductList,
  },
  data() {
    return {
      categoryTitel: this.$route.params.category,
    }
  },
  computed: {
    error() {
      return this.$store.state.error.messageOnPage
    },
    selectedCategoryProducts() {
      if (this.categoryTitel === "Skateboards") {
        return this.$store.getters.skateboards
      } else if (this.categoryTitel === "Apparel") {
        return this.$store.getters.apparel
      } else if (this.categoryTitel === "Accessories") {
        return this.$store.getters.accessories
      } else {
        return this.$store.getters.specialEdition
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

.products {
  max-width: 1440px;
  h3 {
    margin-left: 6rem;
  }
  .category-title {
    width: 85%;
    margin: 5rem auto 2rem;
    letter-spacing: 1px;

    h1 {
      margin: 0;
    }

    .first-line {
      width: 50%;
      height: 2px;
      background-color: $teal;
    }
  }
}
</style>
