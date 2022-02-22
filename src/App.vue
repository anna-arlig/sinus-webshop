<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <LogInPopup />
    <FadeLayer />
  </div>
</template>

<script>

import Header from "./components/header.vue"
import Footer from "./components/footer.vue"
import LogInPopup from './components/loginPopup.vue'
import FadeLayer from './components/FadeLayer.vue'


export default {
  components: { Header, Footer, FadeLayer, LogInPopup},
}

</script>
<style lang="scss">
@import "./assets/styles/fonts-colors.scss";
@import "./assets/styles/mixins.scss";
* {
  box-sizing: border-box;
}
body {
  background-color: #312f30;
}
body,
html {
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #312f30;
  line-height: 1.6;
  list-style: none;
  text-decoration: none;
  // @include flex-col-center;
  #app {
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
    background-color: #fff;
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-family: $heading;
    }
    p,
    button {
      font-family: $paragraph;
    }
  }
}
</style>
