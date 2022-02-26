<template>
  <div class="admin">
    <h1>Welcome admin!</h1>

    <p>
      Here you can view and update orders. You can also view, update, delete and
      create products.
    </p>

    <button @click="getOrders">Display orders</button>
    <button @click="getOrders">Display products</button>

    <router-view></router-view>
  </div>
</template>

<script>
import Action from "@/store/Action.types";
export default {
  methods: {
    getOrders() {
      this.$store.dispatch(Action.GET_ALL_ORDERS);
    },
  },
};
</script>

<style></style>
