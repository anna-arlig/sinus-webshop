<template>
  <main class="home">
    <section class="hero">
      <div class="container">
        <h1>New <span>SINUS </span>decks in store</h1>
        <button>DISCOVER NOW</button>
      </div>
    </section>
    <CategorySection />
    <section class="carousel">CAROUSEL</section>
    <section class="greta">
      <h3>GRETA LIMITED EDITION</h3>
      <button>CHECK IT OUT</button>
    </section>
    <section class="carousel">CAROUSEL</section>
  </main>
</template>

<script>
import CategorySection from '@/components/CategorySection.vue'
export default {
  components: {CategorySection}
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/fonts-colors.scss';
@import '../assets/styles/mixins.scss';

.carousel{
  height: 40rem;
  background-color: green;
}
.home{
  width: 100vw;
  display: grid;
  justify-items: center;
  grid-auto-rows: 1fr auto;
  .hero{
    background-image: url('../assets/images/home-hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 2rem 2rem;
    .container{
      max-width: 40rem;
      h1{
        color: #FFFFFF;
        font-size: 80px;
        span{
          color: $yellow;
        }
      }
      button{
        padding: .5rem 5rem;
        font-size: 20px;
        background-color: $teal;
        color: #ffffff;
        border: none;
        font-weight: bold;
      }    
    }
  }
  .greta{
    width: 80%;
    height: 30rem;
    background-image: url('../assets/images/greta-hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    @include flex-col-center;
    justify-content: center;
    h3{
      font-size: 2rem;
      color: #FFFFFF;
    }
    button{
      padding: .5rem 3rem;
      background-color: $yellow;
      border: none;
      font-size: 1rem;
      font-weight: bold;
      color: white;
    }
  }
}
</style>
