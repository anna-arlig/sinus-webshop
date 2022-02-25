<template>
  <div>
    <h2>Checkout</h2>
    <form class="checkout">
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
            <input type="radio" />
            <img src="../assets/images/fedex.png" alt="" />
            <p>Standard (3-4 days)</p>
            <p>$20</p>
          </div>
          <div class="delivery-type">
            <input type="radio" />
            <img src="../assets/images/ups.png" alt="" />
            <p>Express (1-2 days)</p>
            <p>$30</p>
          </div>
          <div class="delivery-type">
            <input type="radio" />
            <img src="../assets/images/dhl.png" alt="" />
            <p>Standard (5-6 days)</p>
            <p>$15</p>
          </div>
        </section>
        <!-- Payment -->
        <section class="payment">
          <p class="pay-method">Payment method</p>
          <div class="payment-type">
            <input type="radio" />
            <img src="../assets/images/mastercard.png" alt="" />
            <p>Pay with credit card</p>
          </div>
          <div class="payment-type">
            <input type="radio" />
            <img src="../assets/images/paypal-logo.png" alt="" />
            <p>Pay with Paypal</p>
          </div>
          <div class="payment-type">
            <input type="radio" />
            <p><strong>Invoice</strong></p>
            <p>Pay with invoice (30 days)</p>
          </div>
        </section>
      </div>
      <!-- Order review -->
      <section class="order-review">
        <p class="order">Order review</p>
        <!-- <cartProduct /> -->
        <div class="subtotal">
          <p>Subtotal</p>
          <p>$150</p>
        </div>
        <div class="shipping-fee">
          <p>Shipping fee</p>
          <p>$20</p>
        </div>
        <div class="voucher">
          <p>Voucher</p>
          <input type="text" />
        </div>
        <div class="line"></div>
        <div class="total">
          <p>Total</p>
          <p>$170</p>
        </div>
        <label for="message">Message</label>
        <textarea name="message" id="message" cols="60" rows="7"></textarea>
        <div class="terms">
          <input type="checkbox" />
          <p>I accept the <strong>terms and conditions</strong></p>
        </div>
        <button>Place order</button>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      street: "",
      zip: "",
      city: "",
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";
h2 {
  max-width: 85%;
  margin: 3rem auto;
  letter-spacing: 1px;
}
.checkout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
  margin: 3rem auto;
  padding: 0 6rem;

  p {
    text-transform: uppercase;
  }
  // .checkout-info {
  //   margin-right: 3rem;
  // }
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
  }
  .delivery *,
  .payment * {
    margin-right: 2rem;
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
      margin-right: 0.5rem;
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
