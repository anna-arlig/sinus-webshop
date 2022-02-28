<template>
  <section class="thank-you">
    <h1>THANK YOU FOR YOUR ORDER! 😍</h1>
    <p>
      A confirmation email with order details has been sent to your email
      address.
    </p>
    <router-link to="/">
      <button class="back">Back to Home</button>
    </router-link>
    <img src="../assets/images/thanks-hero.jpg" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      BASE_URL: process.env.VUE_APP_BASE_URL,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";
.thank-you {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8rem 0;

  h1 {
    font-size: 2.3rem;
    margin: 0;
  }
  img {
    margin: 6rem 0 0;
    width: 1000px;
  }
  p {
    font-size: 1.2rem;
    text-align: center;
  }
  button {
    margin-top: 3rem;
    padding: 0.6rem 5rem;
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
