<template>
  <div class="userinfo">
    <h4 v-if="user == 'Guest'">This order was placed by a guest</h4>
    <section v-if="user != 'Guest'">
      <h3>This order was placed by</h3>
      <h5>{{ user.name }}</h5>
      <p>{{ user.street }}</p>
      <div class="address">
        <p>{{ user.zip }}</p>
        <p>{{ user.city }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.userOrder;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

p,
h5 {
  margin: 2px;
}

.address {
  @include flex-left;
  flex-direction: row;
}
</style>
