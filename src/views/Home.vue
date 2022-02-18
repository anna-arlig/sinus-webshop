<template>
  <div class="home">
    <div class="hero">
      <div class="container">
        <h1>New <span>SINUS </span>decks in store</h1>
        <button>DISCOVER NOW</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '../assets/styles/fonts-colors.scss';
.home{
  width: 100vw;
  .hero{
    background-image: url('../assets/images/home-hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 2rem 2rem;
    .container{
      width: 15rem;
      h1{
        color: #FFFFFF;
        span{
          color: $yellow;
        }
      }
      button{
        width: 95%;
        
      }
    
    
    
    }
  }
}
</style>
