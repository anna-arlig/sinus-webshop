<template>
  <section
    class="greta"
    @click="
      $router.push({
        name: 'Products',
        params: { category: 'Special Edition' },
      })
    "
  >
    <article v-if="gretaProducts.length">
      <figure class="img-container">
        <img :src="`${BASE_URL}/images/${gretaProducts[0].imgFile}`" />
      </figure>
      <h3>{{ gretaProducts[0].category }} - {{ gretaProducts[0].title }}</h3>
      <div>
        <h3>{{ gretaProducts[0].shortDesc }}</h3>
        <h3>{{ gretaProducts[0].price }}€</h3>
      </div>
    </article>
    <span>
      <h3>
        GRETA <br />
        SPECIAL EDITION
      </h3>
      <button>CHECK IT OUT</button>
    </span>
    <article v-if="gretaProducts.length">
      <figure class="img-container">
        <img :src="`${BASE_URL}/images/${gretaProducts[1].imgFile}`" />
      </figure>
      <h3>{{ gretaProducts[1].category }} - {{ gretaProducts[1].title }}</h3>
      <div>
        <h3>{{ gretaProducts[1].shortDesc }}</h3>
        <h3>{{ gretaProducts[1].price }}€</h3>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: ["gretaProducts"],
  data() {
    return {
      BASE_URL: process.env.VUE_APP_BASE_URL,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
@import "../assets/styles/fonts-colors.scss";
.greta {
  margin: 5rem 0;
  width: 80%;
  height: 30rem;
  background-image: url("../assets/images/greta-hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  &:hover {
    cursor: pointer;
  }
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
    @include flex-col-center;
    padding: 1rem 1.5rem;
    justify-content: space-between;
    h3 {
      align-self: flex-start;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-self: flex-start;
      h3 {
        font-size: 18px;
        color: #ffffff;
      }
    }
    img {
      height: 190px;
    }
  }
  h3::first-letter {
    text-transform: capitalize;
  }
  .img-container {
    width: 10rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  span {
    text-align: center;
    max-width: 20rem;
    @include flex-col-center;
    margin: 1rem;
    h3 {
      font-size: 2rem;
      color: #ffffff;
      align-self: flex-start;
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
