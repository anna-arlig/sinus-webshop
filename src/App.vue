<template>
  <div id="app">
    <Header/>
    
    <router-view/>
  </div>
</template>

<script lang="ts">
import Header from './components/header.vue'

export default {
  components: {Header}
}
</script>
