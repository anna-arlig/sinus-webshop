<template>
  <div class="fade" v-if="fading"></div>
</template>

<script>
export default {
  props: ['error'],
  computed: {
    fading() {
      return this.$store.state.showLogIn && this.$store.state.error;
    },
  },
};
</script>

<style>
.fade {
  background-color: #000000;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.6;
}
</style>
