<template>
  <section class="greta">
    <article v-for="product in gretaProducts" :key="product.id">
      <img :src="`${BASE_URL}/images/${product.imgFile}`" width="40">
      <h3>{{product.category}} - {{product.title}}</h3>
      <span>
        <h3>{{product.price}}kr</h3>
        <h3>{{product.shortDesc}}</h3>
      </span>
    </article>
    <span>
      <h3>
        GRETA <br />
        LIMITED EDITION
      </h3>
      <button>CHECK IT OUT</button>
    </span>
  </section>
</template>

<script>
export default {
    props: {
      gretaProducts: Array
    }, 
    data(){return{
      BASE_URL: process.env.VUE_APP_BASE_URL
    }}
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/fonts-colors.scss";
.greta {
  width: 80%;
  height: 30rem;
  background-image: url("../assets/images/greta-hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  @include flex-center;
  article {
    width: 18rem;
    height: 80%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  span {
    text-align: center;
    max-width: 20rem;
    @include flex-col-center;
    margin: 1rem;
    h3 {
      font-size: 2rem;
      color: #ffffff;
    }
    button {
      padding: 0.5rem 3rem;
      background-color: $yellow;
      border: none;
      font-size: 1rem;
      font-weight: bold;
      color: white;
    }
  }
}
</style>