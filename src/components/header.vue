<template>
  <div class="header">
    <div id="nav">
      <img
        src="../assets/images/sinus-logo-landscape_1.png"
        alt="sinus text-logo"
      />

      <div class="categories">
        <a>Skateboards <Icon icon="dashicons:arrow-down-alt2" /></a>
        <a>Apparel <Icon icon="dashicons:arrow-down-alt2" /></a>
        <a>Accessories <Icon icon="dashicons:arrow-down-alt2" /></a>
        <a>Brands <Icon icon="dashicons:arrow-down-alt2" /></a>
      </div>

      <div class="links-and-search">
        <div class="links">
          <div class="login">
            <Icon icon="bxs:user" width="35" />
            <p>Log in</p>
          </div>
          <div class="favourites">
            <Icon icon="ant-design:heart-filled" width="35" />
            <p>Favourites</p>
          </div>
          <div class="cart" @mouseover="cartHover = true" @mouseleave="cartHover = false">
            <Icon icon="clarity:shopping-cart-solid" width="35" />
            <CartPopup v-if="cartHover" />
            <p>Cart</p>
          </div>
        </div>

        <input type="text" placeholder="Search" />
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import CartPopup from "@/components/cartPopup.vue";
export default {
  data(){return{
    cartHover: false,
  }},
  components: {Icon, CartPopup}
}
</script>

<style scoped lang="scss">
@import "../assets/styles/fonts-colors.scss";
@import "../assets/styles/mixins.scss";
.header {
  max-width: 1440px;
  height: 100px;
  width: 100vw;
  display: flex;
  background-color: $yellow;
  padding: 1rem;
}
#nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.categories {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: $heading;
}

.links {
  display: flex;
}
.links-and-search {
  margin: 0 5rem;
  p {
    margin: 0;
    padding: 0;
    font-size: 0.7 rem;
  }
  div {
    margin: auto;
  }
}
.login,
.favourites,
.cart {
  height: 100%;
  @include flex-col-center;
  justify-content: space-between;
}

input{
  border-radius: 3px;
  border: 1px solid black;
  height: 1.5rem;
  
}
</style>
