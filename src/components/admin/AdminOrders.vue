<template>
  <div class="orders">
    <h1>Orders</h1>

    <OrderComponent
      v-for="order in orders"
      :key="order.id"
      :order="order"
      @changeStatus="changeStatus"
    />
    <UserInfoAdmin v-if="viewUser" />
  </div>
</template>

<script>
import Action from "@/store/Action.types";
import UserInfoAdmin from "@/components/admin/UserInfoAdmin.vue";
import OrderComponent from "@/components/admin/OrderComponent.vue";
export default {
  components: { OrderComponent, UserInfoAdmin },
  computed: {
    orders() {
      return this.$store.state.orders;
    },
  },
  data() {
    return {
      viewUser: false,
    };
  },
  methods: {
    async changeStatus(newStatus) {
      const status = {
        id: newStatus.id,
        status: newStatus.status,
      };

      await this.$store.dispatch(Action.CHANGE_STATUS, status);
      this.$store.dispatch(Action.UPDATE_ORDER, status);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

h1 {
  margin: 20px;
}
</style>
