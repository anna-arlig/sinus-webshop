<template>
  <section class="categories">
      <router-link to="/products"><h2>Skateboards</h2></router-link>
      <router-link to="/products"><h2>Apparel</h2></router-link>
      <router-link to="/products"><h2>Accessories</h2></router-link>
      <router-link to="/products"><h2>Brands</h2></router-link>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/fonts-colors.scss';
@import '../assets/styles/mixins.scss';
.categories{
    margin: 4rem;
    width: 80%;
    display: flex; 
    justify-content: center;
    flex-wrap: wrap;
    a{
      width: 25rem;
      height: 25rem;
      margin: .3rem;
      background-size: cover;
      background-repeat: no-repeat;
      font-family: $heading;
      text-decoration: none;
      color: #FFFFFF;
      font-size: 1.5rem;
      @include flex-col-center;
      justify-content: center;
    }
    a:nth-of-type(1){
      background-image: url('../assets/images/skateboards.png');
    }
    a:nth-of-type(2){
      background-image: url('../assets/images/apparel.jpg');
    }
    a:nth-of-type(3){
      background-image: url('../assets/images/accessories.jpg');
    }
    a:nth-of-type(4){
      background-image: url('../assets/images/brands.jpg');
    }
}
</style>