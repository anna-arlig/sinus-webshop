<template>
  <div class="checkout-container">
    <h2 v-if="!orderPlaced">Checkout</h2>
    <section class="buttons" v-if="!orderPlaced && !userRole">
      <div class="login" @click="modalToggle">
        <p>
          Log in or place an order without registration by filling out the form
          below.
        </p>
        <button class="login-btn">Log in</button>
      </div>
    </section>
    <ThankYou v-if="orderPlaced" />
    <LogInPopup />
    <form class="checkout" v-if="!orderPlaced" @submit.prevent="placeOrder">
      <div class="checkout-info">
        <section class="form">
          <div action="" class="address">
            <p class="billing">Billing address</p>
            <label for="name">Name</label>
            <input type="text" v-model="name" required />
            <label for="email">Email Address</label>
            <input type="email" v-model="email" required />
            <label for="street">Street</label>
            <input type="text" v-model="street" required />
            <div class="zip">
              <div>
                <label for="zip">Postal Code</label>
                <input type="text" v-model="zip" required />
              </div>
              <div>
                <label for="city">City</label>
                <input type="text" v-model="city" required />
              </div>
            </div>
          </div>
        </section>
        <!-- Delivery -->
        <section class="delivery">
          <p class="del-method">Delivery method</p>
          <div class="delivery-type">
            <input
              type="radio"
              id="fedex"
              name="delivery"
              value="39"
              v-model="shippingFee"
              @change="updateDelivery"
              required
            />
            <img src="../assets/images/fedex.png" alt="Fedex logo" />
            <label for="fedex">Standard (3-4 days)</label>
            <p class="price">39 kr</p>
          </div>
          <div class="delivery-type">
            <input
              type="radio"
              id="ups"
              name="delivery"
              value="59"
              v-model="shippingFee"
              @change="updateDelivery"
              required
            />
            <img src="../assets/images/ups.png" alt="UPS logo" />
            <label for="ups">Express (1-2 days)</label>
            <p class="price">59 kr</p>
          </div>
          <div class="delivery-type">
            <input
              type="radio"
              id="dhl"
              name="delivery"
              value="0"
              v-model="shippingFee"
              @change="updateDelivery"
              required
            />
            <img src="../assets/images/dhl.png" alt="DHL logo" />
            <label for="dhl">Standard (5-6 days)</label>
            <p>No fee</p>
          </div>
        </section>
        <!-- Payment -->
        <section class="payment">
          <p class="pay-method">Payment method</p>
          <div class="payment-type">
            <input
              type="radio"
              id="creditcard"
              name="payment"
              value="creditcard"
              v-model="paymentMethod"
              required
            />
            <img src="../assets/images/mastercard.png" alt="MasterCard logo" />
            <label for="creditcard">Pay with credit card</label>
          </div>
          <div class="payment-type">
            <input
              type="radio"
              id="paypal"
              name="payment"
              value="paypal"
              v-model="paymentMethod"
              required
            />
            <img
              src="../assets/images/paypal-logo.png"
              alt="PayPal logo"
              width="60"
            />
            <label for="paypal">Pay with Paypal</label>
          </div>
          <div class="payment-type">
            <input
              type="radio"
              id="invoice"
              name="payment"
              value="invoice"
              v-model="paymentMethod"
              required
            />
            <p class="invoice-text"><strong>Invoice</strong></p>
            <label for="invoice">Pay with invoice (30 days)</label>
          </div>
        </section>
      </div>
      <!-- Order review -->
      <section class="order-review">
        <p class="order">Order review</p>
        <h3 v-if="!cart.length">Your cart is empty! 😞</h3>
        <CartProduct
          v-for="product in cart"
          :key="product.id"
          :inCartProduct="product"
        />
        <div class="subtotal">
          <p>Subtotal</p>
          <p class="price">{{ subTotalForCheckout }} kr</p>
        </div>
        <div class="shipping-fee">
          <p>Shipping fee</p>
          <p class="price">{{ shippingFee }} kr</p>
        </div>
        <div class="voucher">
          <p>Voucher</p>
          <input type="text" />
        </div>
        <div class="line"></div>
        <div class="total">
          <p>Total</p>
          <p class="price">{{ costIncludingShipping }} kr</p>
        </div>
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="60" rows="7"></textarea>
        <div class="terms">
          <input type="checkbox" required />
          <p>I accept the <strong>terms and conditions</strong></p>
        </div>
        <button>Place order</button>
      </section>
    </form>
  </div>
</template>

<script>
import Action from "../store/Action.types";
import LogInPopup from "../components/loginPopup.vue";
import CartProduct from "@/components/cartProduct.vue";
import ThankYou from "@/components/ThankYou.vue";
export default {
  mounted() {
    if (this.$store.state.user.role === "customer") {
      this.$store.dispatch("getUserInfo");
      console.log();
      this.name = this.userInfo.name;
      this.email = this.userInfo.email;
      this.street = this.userInfo.address.street;
      this.zip = this.userInfo.address.zip;
      this.city = this.userInfo.address.city;
    }
  },
  // beforeUpdate() {
  //   if (this.$store.state.user.role === "customer") {
  //     this.$store.dispatch("getUserInfo")
  //     console.log()
  //     this.name = this.userInfo.name
  //     this.email = this.userInfo.email
  //     this.street = this.userInfo.address.street
  //     this.zip = this.userInfo.address.zip
  //     this.city = this.userInfo.address.city
  //   }
  // },
  components: {
    LogInPopup,
    CartProduct,
    ThankYou,
  },
  data() {
    return {
      name: "",
      email: "",
      street: "",
      zip: "",
      city: "",
      shippingFee: "",
      paymentMethod: "",
      orderPlaced: false,
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartIds() {
      return this.$store.getters.idsOfCartItems;
    },
    userInfo() {
      return this.$store.state.user;
    },
    userRole() {
      return this.$store.state.user.role;
    },
    subTotalForCheckout() {
      return this.$store.getters.subTotalForCheckout;
    },
    costIncludingShipping() {
      return this.$store.getters.costIncludingShipping;
    },
  },
  methods: {
    modalToggle() {
      if (this.user == null) {
        this.$store.dispatch(Action.TOGGLE_MODAL);
      }
    },
    updateDelivery() {
      this.$store.dispatch(Action.UPDATE_DELIVERY, this.shippingFee);
    },
    placeOrder() {
      this.$store.dispatch(Action.CREATE_ORDER, this.cartIds);
      this.orderPlaced = true;
      this.$store.state.cart = [];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";
h2 {
  margin: 3rem 6rem;
  letter-spacing: 1px;
}
.buttons {
  width: 55%;

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-btn {
    width: 50%;
    padding: 0.6rem 0;
    background-color: $teal;
    color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
  }
}
.checkout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  margin: 6rem auto;
  padding: 0 6rem;

  p {
    text-transform: uppercase;
    margin: 0;
  }
  p.price {
    text-transform: lowercase;
  }
  .address {
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
  }
  input,
  textarea {
    padding: 0.8rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    border: none;
    border-bottom: 1px solid $teal;
    border-radius: 4px;
    margin-bottom: 2rem;
  }
  input:focus,
  textarea:focus {
    border: none;
    border-bottom: 2px solid $teal;
    outline: none;
  }
  label {
    display: inline-block;
    color: $teal;
    font-family: $paragraph;
    font-size: 0.9rem;
    transform: translate(0.5rem);
  }
  .form,
  .delivery,
  .payment,
  .order-review {
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 5rem;
  }

  .delivery-type,
  .payment-type,
  .subtotal,
  .shipping-fee,
  .voucher,
  .total,
  .zip {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .delivery-type,
  .payment-type {
    margin: 1rem 0;
  }

  .payment-type {
    justify-content: flex-start;
  }
  .zip div {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
  }
  .subtotal,
  .shipping-fee,
  .voucher {
    justify-content: space-between;
  }
  .billing,
  .del-method,
  .pay-method,
  .order {
    font-weight: 600;
    margin-bottom: 2rem;
  }
  input[type="radio"] {
    margin: 0;
    margin-right: 1.5rem;
    border-color: $teal;
    box-shadow: none;
  }
  .delivery *,
  .payment * {
    margin-right: 2rem;
  }
  .invoice-text {
    margin: 0;
  }
  .line {
    width: 100%;
    height: 1.5px;
    background-color: $teal;
  }
  .order-review {
    display: flex;
    flex-direction: column;
  }
  .subtotal p,
  .shipping-fee p {
    margin-bottom: 0;
  }
  .subtotal p {
    font-weight: 600;
  }
  .shipping-fee p {
    font-size: 0.9rem;
  }
  .voucher {
    margin-top: 3rem;
    margin-bottom: 1rem;

    p {
      font-weight: 600;
    }
  }
  .voucher input {
    margin-bottom: 0;
    width: 10rem;
    padding: 0.5rem;
  }
  .total {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 4rem;
  }
  .terms {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;

    p {
      margin: 0;
      font-size: 0.8rem;
    }
    input[type="checkbox"] {
      margin: 0;
      margin-right: 0.5rem;
      box-shadow: none;
    }
  }
  button {
    width: 90%;
    align-self: center;
    margin-top: 1rem;
    padding: 0.8rem;
    background-color: $teal;
    color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
    font-size: 1.3rem;
    font-weight: 500;
    text-transform: uppercase;
  }
}
</style>
