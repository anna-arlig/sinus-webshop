<template>
  <div class="header">
    <div id="nav">
      <router-link to="/">
        <img
          :src="`${BASE_URL}/images/sinus-logo-landscape.svg`"
          alt="sinus text-logo"
          width="220"
        />
      </router-link>
      <div class="categories">
        <router-link
          :to="{ name: 'Products', params: { category: 'Skateboards' } }"
          ><a>Skateboards</a></router-link
        >
        <router-link :to="{ name: 'Products', params: { category: 'Apparel' } }"
          ><a>Apparel <Icon icon="dashicons:arrow-down-alt2" /></a
        ></router-link>
        <router-link
          :to="{ name: 'Products', params: { category: 'Accessories' } }"
          ><a>Accessories <Icon icon="dashicons:arrow-down-alt2" /></a
        ></router-link>
        <router-link to="/products"><a>Limited Edition</a></router-link>
      </div>

      <div class="links-and-search">
        <div class="links">
          <div class="login" @click="modalToggle">
            <Icon icon="bxs:user" width="30" />

            <p v-if="!user">Log in</p>
            <router-link v-else to="/account">
              <p>Profile</p>
            </router-link>
          </div>
          <div class="favourites">
            <Icon icon="ant-design:heart-filled" width="30" />
            <p>Favourites</p>
          </div>
          <div
            class="cart"
            @mouseover="cartHover = true"
            @mouseleave="cartHover = false"
          >
            <Icon icon="clarity:shopping-cart-solid" width="30" />
            <Transition name="fade">
              <CartPopup v-if="cartHover" />
            </Transition>
            <p>Cart</p>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search"
          v-model="search.name"
          @input="updateSearchResults"
          @keyup.enter="searchProduct(search.name)"
        />
        <!-- Byt ut li nedan mot router-links när det går -->
        <dialog
          open
          class="search-results"
          v-if="searchResults.length && cartHover == false"
        >
          <li
            v-for="product of searchResults"
            :key="product.name"
            @click="searchProduct(product.name)"
          >
            {{ product.name }}
          </li>
        </dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2"
import CartPopup from "@/components/cartPopup.vue"
import Action from "../store/Action.types"
export default {
  data() {
    return {
      cartHover: false,
      search: {name: "",
              type: "search",
      },
      BASE_URL: process.env.VUE_APP_BASE_URL,
    }
  },
  components: { Icon, CartPopup },
  methods: {
    searchProduct(searchWord) {
      this.$store.dispatch(Action.MARKUS_SEARCH, searchWord)
      this.$router.push("/products")
    },
    modalToggle() {
      if (this.user == null) {
        this.$store.dispatch(Action.TOGGLE_MODAL)
      }
    },
    updateSearchResults() {
      this.$store.dispatch(
        Action.UPDATE_SEARCH_RESULTS,
        this.search.name.toLowerCase()
      )
    },
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults
    },
    user() {
      return this.$store.state.user
    },
  },
}
</script>

<style scoped lang="scss">
@import "../assets/styles/fonts-colors.scss";
@import "../assets/styles/mixins.scss";
.header {
  max-width: 1440px;
  height: 120px;
  display: flex;
  background-color: $yellow;
  padding: 1.5rem 2rem 1rem;
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

  a {
    @include flex-center;
    text-decoration: none;
    color: #312f30;
    font-size: 1.1rem;
  }
}

.links {
  display: flex;
}
.links-and-search {
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

input {
  border-radius: 3px;
  border: 1px solid black;
  height: 1.5rem;
  margin-top: 0.5rem;

  &::placeholder {
    font-size: 0.8rem;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.search-results {
  margin: 0;
  position: relative;
  top: 0%;
  width: 100%;
  border: 0.5px solid black;
  font-family: $paragraph;

  li:hover {
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
