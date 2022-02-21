<template>
  <div class="header">
    <div id="nav">
      <img
        src="../assets/images/sinus-logo-landscape_1.png"
        alt="sinus text-logo"
      />

      <div class="categories">
        <a>Skateboards</a>
        <a>Apparel</a>
        <a>Accessories</a>
        <a>Brands</a>
      </div>

      <div class="links-and-search">
        <div class="links">
          <div class="login">
            <img src="../assets/images/user-icon.svg" alt="login icon" />
            <p>Log in</p>
          </div>
          <div class="favourites">
            <img src="../assets/images/heart-icon.svg" alt="heart icon" />
            <p>Favourites</p>
          </div>
          <div class="cart">
            <img
              src="../assets/images/shopping-cart.svg"
              alt="shopping cart icon"
            />
            <p>Cart</p>
          </div>
        </div>

        <input type="text" placeholder="Search" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
  flex-direction: column;
  @include flex-center;
}
</style>
