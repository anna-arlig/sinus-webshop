<template>
  <div class="profile">
    <div class="user">
      <h1>Welcome Greta!</h1>
      <div class="user-container">
        <div class="user-info">
          <h2>About me</h2>
          <div class="address">
            <h5>Name: Greta Thunberg</h5>
            <p>Street: Savetheworld 123</p>
            <p>Zip: 123 45</p>
            <p>City: Stockholm</p>
          </div>
          <button>Update my info</button>
        </div>
      </div>

      <div class="img-container">
        <img
          src="@/assets/images/profile-skate.jpg"
          alt="User skateboard hero image"
          width="550"
        />
        <div class="hero-message">
          <h1>Be more of what makes you YOU with</h1>
          <img
            :src="`${BASE_URL}/images/sinus-logo-landscape.svg`"
            alt="Sinus logo"
            width="200px"
          />
        </div>
      </div>
    </div>

    <div class="orders">
      <h3>My orders</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BASE_URL: process.env.VUE_APP_BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

h1 {
  color: $teal;
  text-align: center;
  grid-area: welcome;
}

button {
  border-radius: 4px;
  margin: 2rem 0 0 0;
  padding: 0.5rem 3rem;
  text-align: center;
  color: #ffffff;
  border: 1px solid $teal;
  background-color: $teal;
  text-transform: uppercase;
}

.user {
  margin: 50px;
  display: grid;
  grid-template-areas:
    "welcome img"
    "userinfo img";
}

.user-container {
  @include flex-center;
}

.user-info {
  grid-area: userinfo;
  min-width: 60%;
  @include flex-center;
  p,
  h5 {
    margin: 0px;
    font-size: 18px;
  }
}

img {
  box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
}

.hero-message {
  @include flex-col-center;
  h1 {
    color: white;
    -webkit-text-stroke: 1px;
    -webkit-text-stroke-color: black;
    position: relative;
    max-width: 250px;
    text-align: center;
  }
  img {
    position: relative;
    background-color: rgba(255, 255, 255, 0.5);
    color: rgba(255, 255, 255, 0.5);
    border-radius: 3px;
  }
}

.img-container {
  grid-area: img;
  @include flex-center;
}

.user-info,
.orders {
  border: 1px solid $teal;
  @include flex-left;
  box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
  margin: 20px;
  padding: 15px;
}
</style>
