<template>
  <div id="app">
    <Header/>
    
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  components: {Header}
}
</script>

<style lang="scss">
@import './assets/styles/fonts-colors.scss';
@import './assets/styles/mixins.scss';
*{
  box-sizing: border-box;
}
body, html{
  margin: 0;
  padding: 0;  
  font-size: 16px;
  line-height: 1.6;
  list-style: none;
  text-decoration: none;
  @include flex-col-center;
  #app{
    max-width: 1440px;
    h1, h2, h3, h4, h5{
      font-family: $heading;
      margin: 0;
    }
    p, button{
      font-family: $paragraph;
    }

  }
}
</style>
