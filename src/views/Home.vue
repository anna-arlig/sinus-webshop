<template>
  <main class="home">
    <section class="hero">
      <div class="container">
        <h1>New <span>SINUS </span>decks in store</h1>
        <button>DISCOVER NOW</button>
      </div>
    </section>
    <CategorySection />
    <Carousel/>
    <GretaSection />
    <Carousel />
  </main>
</template>

<script>
import CategorySection from "@/components/CategorySection.vue";
import Carousel from "@/components/carousel.vue";
import GretaSection from '@/components/GretaSection.vue'
import Action from '@/store/Action.types'
export default {
  components: { CategorySection, Carousel, GretaSection },
  async mounted() {
    this.$store.dispatch(Action.SEARCH_ITEMS, 'greta');
  },
  
};
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
    height: 35rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 2rem 2rem;
    font-size: 20px;
    background-color: $teal;
    color: #ffffff;
    border: none;
    font-weight: bold;
  }
}
</style>
