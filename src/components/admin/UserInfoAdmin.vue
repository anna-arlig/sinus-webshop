<template>
  <div class="userinfo">
    <h4 v-if="!order.UserId">This order was placed by a guest</h4>
    <section v-if="order.UserId">
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
import Action from "@/store/Action.types";
export default {
  props: ["order"],
  created() {
    this.$store.dispatch(Action.GET_USER, this.order.UserId);
  },
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
git
