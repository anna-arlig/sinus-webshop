<template>
  <div class="carousel">
    <h3>{{ mockTag }}</h3>

    <ul>
      <li v-for="product of carouselProducts" :key="product.id">
        <ProductItem small :product="product" />
      </li>
    </ul>
    <div class="carousel-nav">
      <button @click="updatePageCounter('back')">
        <Icon icon="dashicons:arrow-left-alt2" class="icon" />
      </button>
      <div class="circle" :class="{ active: isActive.first }"></div>
      <div class="circle" :class="{ active: isActive.second }"></div>
      <div class="circle" :class="{ active: isActive.third }"></div>
      <button @click="updatePageCounter('forward')">
        <Icon icon="dashicons:arrow-right-alt2" class="icon" />
      </button>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/productItem.vue"
import Action from "../store/Action.types"
import { Icon } from "@iconify/vue2"
export default {
  async mounted() {
    this.$store.dispatch(Action.GET_PRODUCTS)
  },
  components: { ProductItem, Icon },
  data() {
    return {
      // props: ['tag'],
      mockTag: "Favourites",
      start: 0,
      end: 3,
      currentPage: 1,
      isActive: {
        first: true,
        second: false,
        third: false,
      },
    }
  },
  methods: {
    updatePageCounter(direction) {
      if (direction === "back" && this.currentPage > 1) {
        this.start -= 3
        this.end -= 3
        this.currentPage--
      } else if (
        direction === "forward" &&
        this.end < this.$store.getters.products.length - 3
      ) {
        this.start += 3
        this.end += 3
        this.currentPage++
      }
      this.isActive.first = false
      this.isActive.second = false
      this.isActive.third = false

      if (this.currentPage == 1) {
        this.isActive.first = true
      } else if (this.currentPage == 2) {
        this.isActive.second = true
      } else {
        this.isActive.third = true
      }
    },
  },
  computed: {
    carouselProducts() {
      return this.$store.getters.products.slice(this.start, this.end)
    },
  },
}
</script>

<style scoped lang="scss">
@import "../assets/styles/fonts-colors.scss";
@import "../assets/styles/mixins.scss";
.carousel {
  @include flex-col-center;
  align-items: center;
  width: 80%;
  height: fit-content;
  margin: 8rem 0 10rem;
}
.productItem {
  height: 100px;
  width: 70px;
}
ul {
  display: flex;
  list-style: none;
  padding: 0;
  height: fit-content;
}
h3 {
  font-size: 2rem;
  text-align: center;
  margin: 0;
}
.carousel-nav {
  width: 70%;
  @include flex-center;
  justify-content: space-evenly;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: $grey;
  box-shadow: (0px 2px 2px rgba(0, 0, 0, 0.25));
}
.active {
  background-color: rgb(59, 59, 59);
  transition: 0.5s ease;
}
.icon {
  width: 40px;
  height: 40px;
}
button {
  border: none;
  background-color: rgba(0, 255, 255, 0);
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
