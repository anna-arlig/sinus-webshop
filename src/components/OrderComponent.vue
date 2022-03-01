<template>
  <div class="order">
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
        <button class="user-btn">View user info</button>
        <button class="order-items-btn">View order items</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"],

  data() {
    return {
      selectedStatus: "",
    };
  },
  computed: {
    newStatus() {
      return {
        id: "",
        status: this.selectedStatus,
      };
    },
  },
  methods: {
    changeStatus(id) {
      this.newStatus.id = id;
      this.$emit("changeStatus", this.newStatus);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

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
