<template>
  <div class="footer">
    <div class="top-part">
      <div class="shipping">
        <Icon icon="ic:baseline-local-shipping" width="80" />
        <h4>Fast shipping</h4>
      </div>
      <div class="returns">
        <Icon icon="bxs:package" width="80" />
        <h4>Easy returns</h4>
      </div>
      <div class="created">
        <Icon icon="mdi:skateboard" width="80" />

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
            temporibus, eos officiis deserunt!
          </p>
        </div>
        <div class="contact">
          <p><strong>Contact</strong></p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad commodi
            nulla, minus provident, consequatur doloribus molestias architecto
            sunt voluptas.
          </p>
        </div>
        <img
          :src="`${BASE_URL}/images/sinus-logo-landscape.svg`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2"
export default {
  data(){return{
    BASE_URL: process.env.VUE_APP_BASE_URL
  }},
  components: {
    Icon,
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";
p {
  font-size: 10px;
}

.footer {
  width: 100vw;
  max-width: 1440px;
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
  img {
    width: 250px;
    margin-left: 10px;
  }
}

.info {
  @include flex-center;
  margin: 20px;
}

.social,
.contact,
.help {
  margin: 15px;
}
</style>
