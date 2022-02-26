<template>
  <div class="orders">
    <h1>Orders</h1>

    <div class="order" v-for="order in orders" :key="order.id">
      <div class="left-part">
        <h3>Order ID: {{ order.id }}</h3>
        <p>Created at: {{ order.createdAt }}</p>
        <p>Status: {{ order.status }}</p>

        <div class="select">
          <label for="status">Change the status of this order</label>
          <select
            name="status"
            id="status"
            @change="changeStatus(order.id)"
            v-model="selectedStatus"
          >
            <option value="inProcess">In process</option>
            <option value="canceled">Canceled</option>
            <option value="shipped">Shipped</option>
          </select>
        </div>

        <div class="buttons">
          <button class="user-btn" @click="getUser(order.UserId)">
            View user info
          </button>
          <button class="order-items-btn">View order items</button>
        </div>

        <UserInfoAdmin v-if="viewUser" />
      </div>
    </div>
  </div>
</template>

<script>
import Action from "@/store/Action.types";
import UserInfoAdmin from "@/components/UserInfoAdmin.vue";
export default {
  components: { UserInfoAdmin },
  computed: {
    orders() {
      return this.$store.state.orders;
    },
  },
  data() {
    return {
      selectedStatus: "",
      viewUser: false,
    };
  },
  methods: {
    async changeStatus(id) {
      const status = {
        id: id,
        status: this.selectedStatus,
      };
      await this.$store.dispatch(Action.CHANGE_STATUS, status);
      this.selectedStatus = "";
      this.$store.dispatch(Action.GET_ALL_ORDERS);
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

h1 {
  margin: 20px;
}

.order {
  border: 1px solid $teal;
  margin: 20px;
  padding: 15px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
}

.select {
  @include flex-left;
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

.order-items-btn {
  background-color: #ffffff;
  color: $teal;
}

.user-btn {
  background-color: $teal;
  color: white;
}

label {
  font-family: $paragraph;
  margin-bottom: 10px;
}
</style>
