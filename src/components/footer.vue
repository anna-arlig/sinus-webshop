<template>
  <div class="footer">
    <div class="top-part">
      <div class="shipping">
        <img
          src="@/assets/images/local_shipping.svg"
          alt="Shipping truck icon"
        />
        <h4>Fast shipping</h4>
      </div>
      <div class="returns">
        <img src="@/assets/images/gift-package.svg" alt="Return box icon" />
        <h4>Easy returns</h4>
      </div>
      <div class="created">
        <!-- <img
          src="@/assets/images/skateboard.svg"
          alt="Created by skaters icon"
        /> -->
        <h4>Created by skaters</h4>
      </div>
    </div>

    <div class="bottom-part">
      <div class="info">
        <div class="social">
          <p><strong>Social media</strong></p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            architecto voluptas, minima officia non enim itaque quas praesentium
            vitae nostrum?
          </p>
        </div>
        <div class="help">
          <p><strong>Help</strong></p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eum
            maxime voluptatibus consequuntur unde explicabo laboriosam odit,
            temporibus, eos officiis deserunt voluptates non suscipit quasi,
            rerum atque quod odio distinctio!
          </p>
        </div>
        <div class="contact">
          <p><strong>Contact</strong></p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi
            nulla, minus provident, consequatur doloribus molestias architecto
            sunt voluptas facere nesciunt dignissimos consequuntur.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";
.footer {
  width: 100vw;
  max-width: 1440px;
}
img {
  width: 50px;
}

.shipping,
.returns {
  @include flex-col-center;
  margin: 20px;
}

.created {
  @include flex-col-center;
  margin: 20px;
  img {
    min-height: 50px;
    min-width: 70px;
  }
}

h4 {
  margin-bottom: 0px;
}

.top-part {
  background-color: $grey;
  font-family: $heading;
  @include flex-center;
  justify-content: space-evenly;
}

.bottom-part {
  background-color: $yellow;
  @include flex-col-center;
}

.info {
  @include flex-center;
}

.social,
.contact,
.help {
  margin: 10px;
}
</style>
