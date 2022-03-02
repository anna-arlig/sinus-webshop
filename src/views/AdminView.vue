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
        <router-link to="/"
          ><button @click="logOut">Log out</button></router-link
        >
      </div>
    </div>

    <AdminOrders v-if="toggleView" />
    <AdminProducts v-else />
    <ErrorModal />
  </div>
</template>

<script>
import ErrorModal from "@/components/ErrorModal.vue"
import AdminOrders from "@/components/admin/AdminOrders.vue"
import AdminProducts from "@/components/admin/AdminProducts.vue"
import Action from "@/store/Action.types"

export default {
  components: { AdminOrders, AdminProducts, ErrorModal },

  data() {
    return {
      toggleView: true,
    }
  },

  methods: {
    getOrders() {
      this.toggleView = true
      this.$store.dispatch(Action.GET_ALL_ORDERS)
    },
    getProducts() {
      this.toggleView = false
    },
    logOut() {
      this.$store.dispatch(Action.LOG_OUT)
    },
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";
.error-modal {
  position: fixed;
  top: 10rem;
}
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
