<template>
  <div class="profile">
    <div class="user">
      <h1>Welcome {{userData.name}}!</h1>
      <div class="user-container">
        <div class="user-info">
          <h2>About me</h2>
          <div class="address">
            <h5>Name: {{userData.name}}</h5>
            <p>Street: {{userData.address.street}}</p>
            <input v-if="edit" v-model="street" placeholder="Street">
            <p>Zip:{{userData.address.zip}}</p>
            <input v-if="edit" v-model="zip" placeholder="Zip code">
            <p>City: {{userData.address.city}}</p>
            <input v-if="edit" v-model="city" placeholder="City">
            <p>Email: {{userData.email}}</p>
            <input v-if="edit" v-model="email" placeholder="email">
            <input v-if="edit" v-model="password" placeholder="password">
          </div>
          <button v-if="!edit" @click="edit=true">Update my info <Icon icon="clarity:edit-line" width="20" /></button>
          <button v-if="edit" @click="updateInfo">Save my info</button>
          <router-link to="/"><button @click="logOut">Log out</button></router-link>
        </div>
      </div>

      <div class="img-container">
        <img
          src="@/assets/images/profile-skate.jpg"
          alt="User skateboard hero image"
          width="550"
        />
        <div class="hero-message">
          <h1>Be more of what makes you YOU with</h1>
          <img
            :src="`${BASE_URL}/images/sinus-logo-landscape.svg`"
            alt="Sinus logo"
            width="200px"
          />
        </div>
      </div>
    </div>

    <div class="orders" v-if="orders.length">
      <h3>My orders</h3>
      <!-- <section class="order">
      <li v-for="product of orderData" :key="product.id">{{product.id}}</li>
      </section> -->
      <!-- <CartViewProduct v-for="product of orderData" :key="product.id" :productInCart="product" /> -->
      <OrderComponent v-for="order of orders" :key="order.id" :order="order"/>
      
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2"
import Action from "../store/Action.types"
// import CartViewProduct from "../components/cartViewProduct.vue"
import OrderComponent from "../components/OrderComponent.vue"
export default {
 async mounted(){
    if(this.$store.state.user.name === ''){
     await this.$store.dispatch('getUserInfo')
    }
    await this.$store.dispatch(Action.GET_ALL_ORDERS)
    // this.$store.dispatch(Action.GET_ITEM, this.orderIds)
  },
  
  data() {
    return {
      BASE_URL: process.env.VUE_APP_BASE_URL,
      zip: '',
      street: '',
      city: '',
      email: '',
      password: '',
      edit: false,
      
    };
  },
  components:{Icon, OrderComponent},
  methods:{
    async updateInfo(){
      this.edit=false
      await this.$store.dispatch(Action.UPDATE_USER_INFO, {
        email: this.email,
        password: this.password,
        address:{
          zip: this.zip,
          street: this.street,
          city: this.city,
          },
      })
      
    },
    logOut(){
      this.$store.dispatch(Action.LOG_OUT)
    }
  },
  computed:{
    orderIds(){
      return this.$store.getters.allOrderIds
    },
    userData(){
        return this.$store.state.user
    },
    orders(){
      return this.$store.state.orders
    }
    // orderData(){
    //  let allOrderItems= []
    //   for (let order of this.$store.state.orders){
    //     for(let item of order.items){
    //       allOrderItems.push(this.$store.state.products[item.ProductId])
    //     }
    //   }
    //   return allOrderItems
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

h1 {
  color: $teal;
  text-align: center;
  grid-area: welcome;
}

button {
  border-radius: 4px;
  margin: 2rem 0 0 0;
  padding: 0.5rem 3rem;
  text-align: center;
  color: #ffffff;
  border: 1px solid $teal;
  background-color: $teal;
  text-transform: uppercase;
}

.user {
  margin: 50px;
  display: grid;
  grid-template-areas:
    "welcome img"
    "userinfo img";
}

.user-container {
  @include flex-center;
}

.user-info {
  grid-area: userinfo;
  min-width: 60%;
  @include flex-center;
  p,
  h5 {
    margin: 0px;
    font-size: 18px;
  }
}

img {
  box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
}

.hero-message {
  @include flex-col-center;
  h1 {
    color: white;
    -webkit-text-stroke: 1px;
    -webkit-text-stroke-color: black;
    position: relative;
    max-width: 250px;
    text-align: center;
  }
  img {
    position: relative;
    background-color: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    padding: 10px;
  }
}

.img-container {
  grid-area: img;
  @include flex-center;
}

.user-info,
.orders {
  border: 1px solid $teal;
  @include flex-left;
  box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
  margin: 20px;
  padding: 15px;
}
</style>
