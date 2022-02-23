<template>
  <div class="header">
    <div id="nav">
      <img
        src="../assets/images/sinus-logo-landscape_1.png"
        alt="sinus text-logo"
      />

      <div class="categories">
        <a>Skateboards <Icon icon="dashicons:arrow-down-alt2" /></a>
        <a>Apparel <Icon icon="dashicons:arrow-down-alt2" /></a>
        <a>Accessories <Icon icon="dashicons:arrow-down-alt2" /></a>
        <a>Brands <Icon icon="dashicons:arrow-down-alt2" /></a>
      </div>

      <div class="links-and-search">
        <div class="links">

          <div class="login" 
            @click="modalToggle"
          >
           
        
            <Icon icon="bxs:user" width="35" />

            <p>Log in</p>
          </div>
          <div class="favourites">
            <Icon icon="ant-design:heart-filled" width="35" />
            <p>Favourites</p>
          </div>
          <div class="cart" @mouseover="cartHover = true" @mouseleave="cartHover = false">
            <Icon icon="clarity:shopping-cart-solid" width="35" />
            <Transition name="fade">
              <CartPopup v-if="cartHover" />
            </Transition>
            <p>Cart</p>
          </div>
        </div>
       
          <input type="text" placeholder="Search" v-model="search" @input="updateSearchResults" />
          <!-- Byt ut li nedan mot router-links när det går -->
          <dialog open class="search-results" v-if="searchResults.length && cartHover==false">
          <li v-for="product of searchResults" :key="product">{{product}}</li>
          </dialog>
        
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import CartPopup from "@/components/cartPopup.vue";
import Action from '../store/Action.types'
export default {
  data(){return{
    cartHover: false,
    search: '',
  }},
  components: {Icon, CartPopup},
  methods:{
  modalToggle(){
      this.$store.dispatch(Action.TOGGLE_MODAL)
      },
    updateSearchResults(){
      this.$store.dispatch(Action.UPDATE_SEARCH_RESULTS, this.search.toLowerCase())
    }
  },
  computed:{
    searchResults(){
      return this.$store.state.searchResults

    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/fonts-colors.scss";
@import "../assets/styles/mixins.scss";
.header {
  max-width: 1440px;
  height: 100px;
  width: 100vw;
  display: flex;
  background-color: $yellow;
  padding: 1rem;
}
#nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.categories {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: $heading;

  a{
    @include flex-center;
  }
}

.links {
  display: flex;
}
.links-and-search {
  margin: 0 5rem;
  p {
    margin: 0;
    padding: 0;
    font-size: 0.7rem;
  }
  div {
    margin: auto;
  }
}
.login,
.favourites,
.cart {
  height: 100%;
  @include flex-col-center;
  justify-content: space-between;
}

input{
  border-radius: 3px;
  border: 1px solid black;
  height: 1.5rem; 
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.search-results{
  margin:0;
  position: relative;
  top: 0%;
  width: 100%;
  border: .5px solid black;
  font-family: $paragraph;

  li:hover{
    font-weight: bold;
    cursor:pointer;
  }
}

</style>
