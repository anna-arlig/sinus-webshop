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
      <article></article>
      <span>
        <h3>GRETA <br> LIMITED EDITION</h3>
        <button>CHECK IT OUT</button>  
      </span>
      <article></article>
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
    @include flex-center;
    article{
      width: 30%;
      height: 80%;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    span{
      text-align: center;
      max-width: 20rem;
      @include flex-col-center;
      margin: 1rem;
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
}
</style>
