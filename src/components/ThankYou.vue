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
section {
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
    width: 800px;
  }
  p {
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>
