<template>
  <section :class="{ large, small }">
    <div class="title" v-if="large">
      <h3>{{ product.category }}/ {{ product.title }}</h3>
      <div class="first-line"></div>
    </div>
    <div class="product-info">
      <div class="product-img">
        <img :src="`${BASE_URL}/images/${product.imgFile}`" alt="" />
      </div>
      <div class="product-details">
        <div class="product-name" v-if="large">
          <h2>{{ product.title }}</h2>
          <div class="line"></div>
        </div>
        <h3 v-if="small">{{ product.title }}</h3>
        <div class="stars">
          <img src="../assets/images/star.svg" alt="star" />
          <img src="../assets/images/star.svg" alt="star" />
          <img src="../assets/images/star.svg" alt="star" />
          <img src="../assets/images/star.svg" alt="star" />
          <img src="../assets/images/star.svg" alt="star" />
          <p class="reviews" v-if="large">Read 15 other reviews</p>
        </div>
        <p v-if="large">
          {{ longDesc }}
        </p>
        <p v-if="large">
          {{ shortDesc }}
        </p>
        <h3 class="price">$85</h3>
        <button v-if="large" @click="addProductToCart">Add to cart</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){return{
    BASE_URL: process.env.VUE_APP_BASE_URL
  }},
  props: {
    product: Object,
    large: Boolean,
    small: Boolean,
  },
  methods: {
    addProductToCart() {
      this.$store.dispatch("addToCart", this.id)
    },
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

// ProductList view SMALL
section.small {
  margin: 6rem 1rem 1rem;
  width: 17rem;
  cursor: pointer;
  transition: 1s ease;

  &:hover {
    transform: scale(1.05);
  }

  .product-info {
    @include flex-col-center;
    padding: 2rem 2rem 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    .product-img {
      margin-bottom: 0.8rem;
      img {
        width: 100%;
      }
    }
    .product-details {
      @include flex-col-center;

      h3 {
        letter-spacing: 1px;
        font-size: 1.3rem;
        margin: 0;
      }
      .stars {
        margin-bottom: 4rem;

        img {
          margin: 0 0.2rem;
        }
      }
      .price {
        font-size: 1.3rem;
      }
    }
  }
}

// SingleProduct view LARGE
section.large {
  max-width: 85%;
  margin: 3rem auto 10rem;
  padding: 2rem;

  .title {
    margin-bottom: 7rem;
    letter-spacing: 1px;

    h3 {
      margin: 0;
    }

    .first-line {
      width: 50%;
      height: 2px;
      background-color: $teal;
    }
  }

  .product-info {
    display: flex;
    justify-content: space-between;

    .product-img {
      @include flex-center;
      flex: 1;
      padding: 4rem 3rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;

      img {
        width: 100%;
      }
    }

    .product-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding: 0 5rem;

      h2 {
        margin: 0;
        font-size: 2rem;
        letter-spacing: 1px;
      }
      .line {
        width: 100%;
        height: 2px;
        background-color: $teal;
      }
      .stars {
        align-self: flex-end;
        text-align: right;

        img {
          margin-left: 0.5rem;
        }
      }
      .reviews {
        font-size: 0.5rem;
      }
      p {
        font-size: 1rem;
        margin-top: 0;
      }

      h3 {
        font-size: 1.8rem;
      }
      button {
        margin-top: 1rem;
        padding: 0.8rem 0;
        background-color: $teal;
        color: #fff;
        border-radius: 5px;
        border: none;
        box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
        font-size: 1.3rem;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
  }
}
</style>
