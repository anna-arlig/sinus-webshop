<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/styles/fonts-colors.scss';
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
    }
    p, button{
      font-family: $paragraph;
    }

  }
}
</style>