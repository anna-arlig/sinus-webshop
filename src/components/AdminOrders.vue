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
import UserInfoAdmin from "@/components/UserInfoAdmin.vue";
import OrderComponent from "@/components/OrderComponent.vue";
export default {
  destroyed(){
    this.$store.dispatch(Action.CLEAR_ERROR_ON_PAGE)
  },
  components: { OrderComponent, UserInfoAdmin},
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
    getUser() {
      // this.$store.dispatch(Action.GET_USER, id);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";
.error{
  margin-left: 1.4rem;
  color: red;
}
h1 {
  margin: 20px;
}
</style>
