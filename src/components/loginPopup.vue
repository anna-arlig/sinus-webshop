<template>
  <dialog open class="login-popup" v-if="modal && currentModal == 'login'">
    <span>
      <h2>Log in</h2>
      <i @click="logInToggle"><Icon icon="mdi:close" width="25" /></i>
    </span>
    <form @:submit.prevent="signIn">
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        required
        placeholder="bingo@berra.com"
        v-model="email"
      />
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        required
        placeholder="********"
        v-model="password"
      />
      <p v-if="error" class="error">{{ error }}</p>
      <span class="btn-controller">
        <button @click="signIn">Log in</button>
        <button @click="closeModal">Cancel</button>
      </span>
    </form>
    <p v-if="registerSuccess && !error">
      User registered! Please enter email and password to log in
    </p>
    <p class="signup-text">
      Dont't have a <strong>SINUS</strong> account yet? Create one now:
    </p>
    <a @click="currentModal = 'registration'"> Sign up </a>
  </dialog>

  <RegistrationForm
    v-else-if="modal && currentModal == 'registration'"
    @goBack="setCurrentModal"
    @success="registerSuccess = true"
  />
</template>

<script>
import { Icon } from "@iconify/vue2";
import RegistrationForm from "./RegistrationForm.vue";
import Action from "@/store/Action.types";
export default {
  components: { RegistrationForm, Icon },
  data() {
    return {
      registerSuccess: false,
      currentModal: "login",
      email: "",
      password: "",
    };
  },
  computed: {
    modal() {
      return this.$store.state.showLogIn;
    },
    error() {
      return this.$store.state.error.messageOnModal;
    },
  },
  methods: {
    logInToggle() {
      this.$store.dispatch(Action.TOGGLE_MODAL);
      this.$store.dispatch(Action.CLEAR_ERROR_ON_MODAL)
    },
    setCurrentModal() {
      this.currentModal = "login";
    },
    closeModal() {
      this.$store.dispatch(Action.TOGGLE_MODAL);
    },
    signIn() {
      this.registerSuccess = false;
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch(Action.CLEAR_ERROR_ON_MODAL)
      this.$store.dispatch(Action.LOG_IN, user);
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/fonts-colors.scss";
form {
  display: flex;
  flex-direction: column;
  label {
    margin: 0;
  }
}
.login-popup {
  width: 35rem;
  background-color: #ffffff;
  position: absolute;
  top: 10rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  z-index: 5;
  padding: 1rem 2rem;
  box-sizing: border-box;
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    i:hover {
      cursor: pointer;
    }
  }
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }
  label {
    width: 4rem;
    display: block;
    background-color: #ffffff;
    color: $teal;
    font-family: $paragraph;
    font-size: 0.9rem;
    transform: translate(20px, 26px);
  }
  input {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid $teal;
  }
  .btn-controller {
    align-self: flex-end;
    button {
      border-radius: 4px;
      margin: 1rem 0 0 1rem;
      padding: 0.5rem 3rem;
      text-align: center;
      color: #ffffff;
      border: 1px solid $teal;
      background-color: $teal;
      text-transform: uppercase;
      font-weight: 500;
      box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
    }
    button:last-of-type {
      background-color: #ffffff;
      color: $teal;
    }
  }
  .signup-text {
    text-align: center;
    margin: 4rem 0 0;
  }
  a {
    font-family: $paragraph;
    font-weight: 500;
    border-radius: 4px;
    margin: 1rem 0 0.5rem 1rem;
    padding: 0.2rem 2rem;
    text-align: center;
    color: #ffffff;
    border: 1px solid $teal;
    background-color: $teal;
    text-transform: uppercase;
    align-self: center;
    border: none;
    box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
  }
  .error {
    color: red;
  }
}
</style>
