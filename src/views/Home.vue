<template>
  <main class="home">
    <section class="hero">
      <div class="container">
        <h1>New <span>SINUS</span> decks in store</h1>
        <router-link
          :to="{ name: 'Products', params: { category: 'Skateboards' } }"
        >
          <button>DISCOVER NOW</button>
        </router-link>
      </div>
    </section>
    <CategorySection />
    <Carousel />
    <GretaSection />
    <Carousel />
  </main>
</template>

<script>
import CategorySection from "@/components/CategorySection.vue"
import Carousel from "@/components/carousel.vue"
import GretaSection from "@/components/GretaSection.vue"
import Action from "@/store/Action.types"
export default {
  components: { CategorySection, Carousel, GretaSection },
  async mounted() {
    this.$store.dispatch(Action.SEARCH_ITEMS, "greta")
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/fonts-colors.scss";
@import "../assets/styles/mixins.scss";

.home {
  width: 100%;
  display: grid;
  justify-items: center;
  .hero {
    background-image: url("../assets/images/home-hero.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 37rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 2rem 6rem;
    font-size: 20px;
    background-color: $teal;
    color: #ffffff;
    border: none;

    h1 {
      font-size: 3.2rem;
      margin-top: 5rem;
      margin-bottom: 0;

      span {
        color: $yellow;
      }
    }
    button {
      margin-top: 1rem;
      padding: 0.6rem 7rem;
      background-color: $teal;
      color: #fff;
      border-radius: 5px;
      border: 1px solid $teal;
      box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
      font-size: 1.3rem;
      font-weight: 500;
      text-transform: uppercase;
      transition: transform 0.5s ease;
      cursor: pointer;
    }
  }
}
</style>
