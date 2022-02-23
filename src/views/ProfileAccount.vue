<template>
  <div class="profile">
    <div class="user">
      <h1>Welcome Greta!</h1>
      <div class="user-info">
        <h3>About me</h3>
        <div class="address">
          <h5>Name: Greta Thunberg</h5>
          <p>Street: Savetheworld 123</p>
          <p>Zip: 123 45</p>
          <p>City: Stockholm</p>
        </div>
      </div>
      <div class="img-container">
        <img
          src="@/assets/images/profile-skate.jpg"
          alt="Colorful skateboard"
          width="420"
        />
      </div>
    </div>

    <div class="orders">
      <h3>My orders</h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

h1 {
  color: $teal;
  margin: 20px;
  grid-area: welcome;
}

h3 {
  margin-top: 0px;
  margin-bottom: 10px;
}

p,
h5 {
  margin: 0px;
}

.user {
  display: grid;
  grid-template-areas:
    "welcome img"
    "userinfo img";
}

.user-info {
  grid-area: userinfo;
  min-width: 40%;
}

img {
  box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
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
