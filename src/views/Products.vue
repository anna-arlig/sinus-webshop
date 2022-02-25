<template>
  <div class="products">
    <div class="category-title">
      <h1>{{ categoryTitel }}</h1>
      <div class="first-line"></div>
    </div>
    <ProductList :categoryProducts="selectedCategoryProducts" />
  </div>
</template>

<script>
import ProductList from "../components/ProductList"
import Action from "../store/Action.types"
export default {
  mounted() {
    this.$store.dispatch(Action.GET_CATEGORY, this.$route.params.category)
  },
  beforeRouteUpdate(to, from, next) {
    console.log(from)
    console.log(to)
    this.categoryTitel = to.params.category
    this.$store.dispatch(Action.GET_CATEGORY, to.params.category)
    next()
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
    selectedCategoryProducts() {
      if (this.categoryTitel === "Skateboards") {
        return this.$store.getters.skateboards
      } else if (this.categoryTitel === "Apparel") {
        return this.$store.getters.apparel
      } else {
        return this.$store.getters.accessories
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
