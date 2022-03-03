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
    <NavSection />
    <Carousel/>
    <GretaSection :gretaProducts='specialEdition' />
    <Carousel />
  </main>
</template>

<script>
import NavSection from "@/components/NavSection.vue";
import Carousel from "@/components/carousel.vue";
import GretaSection from '@/components/GretaSection.vue'
import Action from '@/store/Action.types'
export default {
  components: { NavSection, Carousel, GretaSection },
  async beforeMount() {
    this.$store.dispatch(Action.SEARCH_ITEMS, "greta")
  },
  computed:{
    specialEdition(){
      return this.$store.getters.specialEdition
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/fonts-colors.scss";
@import "../assets/styles/mixins.scss";

.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    font-weight: bold;
    .container{
      width: 25rem;
      h1{
        font-size: 3rem;
        margin-bottom: .5rem;
        span{
          color: $yellow;
        }
      }
      button{
        padding: .5rem 4rem;
        border: 1px solid $teal;
        border-radius: 4px;
        background-color: $teal;
        font-weight: 600;
        font-size: 1.1rem;
        color: #FFFFFF;
        transition: background-color .5s;
        &:hover{
          background-color: #FFFFFF;
          color: $teal;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
