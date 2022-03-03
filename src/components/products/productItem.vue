<template>
  <section :class="{ large, small }">
    <div class="title" v-if="large">
      <h3>{{ product.category }}/ {{ product.title }}</h3>
      <div class="first-line"></div>
    </div>
    <div class="product-info">
      <div class="product-img">
        <img
          v-if="small"
          :src="`${BASE_URL}/images/${product.imgFile}`"
          width="280"
          height="220"
          :alt="product.title"
        />
        <img
          v-if="large"
          :src="`${BASE_URL}/images/${product.imgFile}`"
          :alt="product.title"
        />
      </div>
      <div class="product-details">
        <div class="product-name" v-if="large">
          <h2>{{ product.title }}</h2>
          <div class="line"></div>
        </div>
        <h3 v-if="small">{{ product.title }}</h3>
        <div class="stars">
          <img src="@/assets/images/star.svg" alt="star" />
          <img src="@/assets/images/star.svg" alt="star" />
          <img src="@/assets/images/star.svg" alt="star" />
          <img src="@/assets/images/star.svg" alt="star" />
          <img src="@/assets/images/star.svg" alt="star" />
          <p class="reviews" v-if="large">Read 15 other reviews</p>
        </div>
        <p v-if="large">
          {{ product.longDesc }}
        </p>
        <p class="unisex">
          {{ product.shortDesc }}
        </p>
        <h3 class="price">{{ product.price }} kr</h3>
        <p v-if="large">
          Free delivery on orders over <strong>1000 kr</strong>
        </p>
        <button v-if="large" @click="addProductToCart(product)">
          Add to cart
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Action from "@/store/Action.types.js"
export default {
  props: {
    product: Object,
    large: Boolean,
    small: Boolean,
  },

  data() {
    return {
      BASE_URL: process.env.VUE_APP_BASE_URL,
    }
  },

  methods: {
    addProductToCart(product) {
      this.$store.dispatch(Action.ADD_TO_CART, product)
    },
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

// ProductList view SMALL
section.small {
  margin: 3rem 1rem 5rem;
  width: 18rem;
  cursor: pointer;

  .product-info {
    @include flex-col-center;
    padding: 2rem 0 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    .product-img {
      margin-bottom: 0.8rem;
      transition: 1s ease;

      &:hover {
        transform: scale(1.1);
      }

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
        margin-bottom: 2.5rem;

        img {
          margin: 0 0.2rem;
        }
      }
      .price {
        font-size: 1.3rem;
      }
      .unisex {
        text-transform: uppercase;
      }
    }
  }
}

// SingleProduct view LARGE
section.large {
  max-width: 80%;
  margin: 3rem auto 10rem;
  padding: 2rem;

  .title {
    margin-bottom: 7rem;
    letter-spacing: 1px;

    h3 {
      margin: 0;
      text-transform: uppercase;
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
      width: 100%;
      height: 35rem;
      flex: 1;
      padding: 2rem 1rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;

      img {
        max-height: 100%;
        max-width: 90%;
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
      .unisex {
        text-transform: uppercase;
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
        border: 1px solid $teal;
        box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
        font-size: 1.3rem;
        font-weight: 500;
        text-transform: uppercase;
        transition: transform 0.5s ease;
        &:hover {
          cursor: pointer;
          background-color: #ffffff;
          color: $teal;
          border: 1px solid $teal;
        }
        &:active {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
