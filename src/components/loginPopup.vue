<template>
  <dialog open v-if="logInModal" class="login-popup">
    <p>Log in</p>   
    <label for="username">Username</label>
    <input type="text" id="username" required
      v-model="username"
    >
    <label for="password">Password</label>
    <input type="password" id="password" required
      v-model="password"
    >
    <span>
      <button
        @click="signIn"
      >
        Log in
      </button>
      <button @click="logInToggle">Cancel</button>
    </span>
    <button>Sign up</button>
  </dialog>  
</template>

<script>
import Action from '@/store/Action.types'
export default {
  data(){return{
    username: '',
    password: ''
  }},
  computed: {
    logInModal(){
      return this.$store.state.logInPopup
    }
  }, 
  methods:{
    logInToggle(){
      this.$store.dispatch(Action.TOGGLE_LOGIN)
    }, 
    signIn(){
      this.$store.dispatch(Action.GET_USER, {...this.username, ...this.password})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/fonts-colors.scss";
.login-popup{
  width: 35rem;
  background-color: #FFFFFF;
  position: absolute;
  top: 10rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  z-index: 5;
  p{
    font-size: 2rem;
    font-weight: 600;
  }  
  label{
    width: 4rem;
    background-color: #FFFFFF;
    transform: translate(12px, 12px);
  }
  input{
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid $teal;
  }
  span{
    align-self: flex-end;
    button{
      border-radius: 4px;
      margin: 1rem 1rem 0 0;
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
    button{
      align-self: center;
      margin-top: 3rem;
      background-color: #FFFFFF;
      border: none;
    }
    button:hover{
        cursor: pointer;
      }
}
</style>
