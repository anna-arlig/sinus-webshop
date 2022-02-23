<template>
  <dialog open class="login-popup"
    v-if="modal && currentModal == 'login'"
  >
    <span>
      <h2>Log in</h2>  
      <i @click="logInToggle"><Icon icon="mdi:close" width="25" /></i>
    </span>
    <label for="email">Email</label>
    <input type="text" id="email" required
      v-model="email"
    >
    <label for="password">Password</label>
    <input type="password" id="password" required
      v-model="password"
    >
    <span class="btn-controller">
      <button
        @click="signIn"
      >
        Log in
      </button>
      <button @click="closeModal">Cancel</button>
    </span>
    <a @click="currentModal = 'registration'"
    >
      Sign up
    </a>
  </dialog>
  <RegistrationForm v-else-if="modal && currentModal == 'registration'"
    @goBack='setCurrentModal'
  />
</template>

<script>
import { Icon } from '@iconify/vue2';
import RegistrationForm from './RegistrationForm.vue'
import Action from '@/store/Action.types'
export default {
  components: {RegistrationForm, Icon},
  data(){return{
    currentModal: 'login',
    email: 'customer@example.com',
    password: 'password', 
  }},
  computed: {
    modal(){
      return this.$store.state.showLogIn
    }, 
  }, 
  methods:{
    setCurrentModal(){
      this.currentModal = 'login'
    },
    closeModal(){
      this.$store.dispatch(Action.TOGGLE_MODAL)
    }, 
    signIn(){
      const user = {
        email: this.email, 
        password: this.password
      }
      this.$store.dispatch(Action.GET_USER, user)
      this.email = ''
      this.password = ''
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/fonts-colors.scss";
form{
  display: flex;
  flex-direction: column;
  label{
    margin: 0;
  }
}
.login-popup{
  width: 35rem;
  background-color: #FFFFFF;
  position: absolute;
  top: 10rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  z-index: 5;
  padding: 1rem 2rem;
  box-sizing: border-box;
  span{
    display: flex;
    justify-content: space-between;
    align-items: center;
    i:hover{
      cursor: pointer;
    }
  }
  h2{
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }  
  label{
    width: 4rem;
    display: block;
    background-color: #FFFFFF;
    transform: translate(12px, 12px);
  }
  input{
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid $teal;
  }
  .btn-controller{
    align-self: flex-end;
    button{
      border-radius: 4px;
      margin: 1rem 0 0 1rem;
      padding: .5rem 3rem;
      text-align: center;
      color: #FFFFFF;
      border: 1px solid $teal;
      background-color: $teal;
    }
    button:last-of-type{
      background-color: #FFFFFF;
      color: $teal;
    }
  }
    a{
      align-self: center;
      margin-top: 3rem;
      background-color: #FFFFFF;
      border: none;
      &:hover{
        cursor: pointer;
      }
    }
    button:hover{
        cursor: pointer;
      }
}
</style>
