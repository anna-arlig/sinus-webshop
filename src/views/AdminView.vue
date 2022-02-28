<template>
  <div class="admin">
    <div class="info">
      <h1>Welcome admin!</h1>

      <p>
        Here you can view and update orders. You can also view, update, delete
        and create products.
      </p>

      <div class="buttons">
        <button @click="getOrders" class="order-btn">Display orders</button>
        <button @click="getProducts" class="products-btn">
          Display products
        </button>
      </div>
    </div>

    <AdminOrders v-if="toggleView" />
    <AdminProducts v-else />
  </div>
</template>

<script>
import AdminOrders from "@/components/AdminOrders.vue";
import AdminProducts from "@/components/AdminProducts.vue";
import Action from "@/store/Action.types";

export default {
  components: { AdminOrders, AdminProducts },

  data() {
    return {
      toggleView: true,
    };
  },

  methods: {
    getOrders() {
      this.toggleView = true;
      this.$store.dispatch(Action.GET_ALL_ORDERS);
    },
    getProducts() {
      this.toggleView = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

.info {
  @include flex-col-center;
}

button {
  border: 1px solid $teal;
  border-radius: 3px;
  text-transform: uppercase;
  min-width: 182px;
  min-height: 35px;
  margin: 15px;
  margin-top: 40px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(1.1);
  }
}

.order-btn {
  background-color: #ffffff;
  color: $teal;
}

.products-btn {
  background-color: $teal;
  color: white;
}
</style>
