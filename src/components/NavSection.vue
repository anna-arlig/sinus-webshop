<template>
  <section class="categories">
    <router-link :to="{ name: 'Products', params: { category: 'Skateboards' } }"
      ><h2>Skateboards</h2>
    </router-link>
    <router-link :to="{ name: 'Products', params: { category: 'Apparel' } }"
      ><h2>Apparel</h2>
    </router-link>
    <router-link :to="{ name: 'Products', params: { category: 'Accessories' } }"
      ><h2>Accessories</h2>
    </router-link>
    <router-link
      :to="{ name: 'Products', params: { category: 'Special Edition' } }"
    >
      <h2>Special Edition</h2>
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/styles/fonts-colors.scss";
@import "../assets/styles/mixins.scss";
.categories {
  margin: 5rem 0;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  a {
    width: 30rem;
    height: 25rem;
    margin: 0.5rem 0;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: $heading;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.5rem;
    @include flex-col-center;
    justify-content: center;
  }
  a:nth-of-type(1) {
    background-image: url("../assets/images/skateboards.jpg");
  }
  a:nth-of-type(2) {
    background-image: url("../assets/images/apparel.jpg");
  }
  a:nth-of-type(3) {
    background-image: url("../assets/images/accessories.jpg");
  }
  a:nth-of-type(4) {
    background-image: url("../assets/images/brands.jpg");
  }
}
</style>
