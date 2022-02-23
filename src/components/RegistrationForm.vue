<template>
  <dialog class="registration">
    <span>
      <i @click="$emit('goBack')"><Icon icon="mdi:chevron-left" width="25" /></i>
      <i @click="logInToggle"><Icon icon="mdi:close" width="25" /></i>
    </span>
    <h2>Signup</h2>
    <form @submit.prevent="signUp">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Bingo Berra"
        :class="{error: error.name}"
        @input="validateCharacters" 
        v-model="name" 
      >
      <small>{{error.name}}</small>
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="bingo@berra.com"
        v-model="email" 
        :class="{error: error.email}"
      >
      <small>{{error.email}}</small>
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="minimum 8 characters"
        v-model="password" 
        :class="{error: error.password}"
      >
      <small>{{error.password}}</small>
      <label for="repeat-password">Repeat Password</label>
      <input type="password" id="repeat-password" placeholder="repeat password"
        v-model="repeatPassword" 
        :class="{error: error.password}"
      >
      <h2>Adress</h2>
      <label for="street">Street</label>
      <input type="text" id="street" placeholder="jörgansväg 33"
        v-model="street" 
        :class="{error: error.street}"
      >
      <small>{{error.street}}</small>
      <label for="zip">Zip</label>
      <input type="text" maxlength="5" minlength="5" placeholder="12345"
        v-model="zip" 
        :class="{error: error.zip}"
      >
      <small>{{error.zip}}</small>
      <label for="city">City</label>
      <input type="text" id="city" placeholder="City"
        v-model="city" 
        :class="{error: error.city}"
      >
      <small>{{error.city}}</small>
      <span>
        <button>
          sign up
        </button>
        <button @click="logInToggle">
          Cancel
        </button>
    </span>
    </form>
  </dialog>
</template>

<script>
import { Icon } from '@iconify/vue2';
import Action from '@/store/Action.types'
export default {
  components: {
		Icon,
	},
  data(){return{
    minPasswordLength: 8,
    email: '', 
    name: '',
    password: '', 
    repeatPassword: '',
    street: '',
    zip: null,
    city: '',
    validName: false, 
    noNumberInName: false,
    validPassword: false,
    validZip: false,
    validCity: false, 
    validEmail: false, 
    validStreet: false,
    error: {
      name: '', 
      password: '', 
      street: '',
      zip: '', 
      city: '', 
      email: ''
    }
  }},
  methods:{
    validateCharacters(e){ 
      if(e.target.value.match(/^[A-ZÅÄÖa-zåäö\s]+$/)){
        this.noNumberInName = true
        this.error.name = ''      
      }else {        
        this.error.name = 'NO NUMBERS'
        this.noNumberInName = false
      }if(e.target.value < 1){
        this.error.name = ''
      }
    },
    logInToggle(){
      this.$emit('goBack')
      this.$store.dispatch(Action.TOGGLE_MODAL)
    }, 
    signUp(){
      if(!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this.email)){
        this.error.email = 'ENTER A VALID EMAIL'
      }else{
        this.error.email = ''
        this.validEmail = true
      }
      if(!/\s/.test(this.name.trim())){
        this.error.name = 'NEEDS FIRST- AND LASTNAME'
      }else{
        this.validName = true
      }
      if(this.password.length < this.minPasswordLength){
        this.error.password = 'PASSWORD NEEDS A MINIMUM OF 8 CHARACTERS'
      }
      if(this.password != this.repeatPassword){
        this.error.password = 'PASSWORD DOES NOT MATCH'
      }
      if(this.password.length && this.password == this.repeatPassword){
        this.validPassword = true
        this.error.password = ''
      }
      if(this.street.length < 2){
        this.error.street = 'ENTER STREET NAME'
      }else{
        this.error.street = ''
        this.validStreet = true
      }
      if(!/^[0-9]*$/.test(this.zip) || this.zip.length < 5){
        this.error.zip = 'NEEDS 5 DIGITS'
      }
      else{
        this.error.zip = ''
        this.validZip = true
      }
      if(this.city.length < 3){
        this.error.city = 'ENTER CITY'
      }else{
        this.validCity = true
        this.error.city = ''
      }
      if( this.validName && this.noNumberInName && this.validPassword && this.validZip
          && this.validCity && this.validEmail && this.validStreet){
            const newUser = {
              email: this.email, 
              password: this.password, 
              name: this.name, 
              address:{
                city: this.city, 
                street: this.street, 
                zip: this.zip
              }
            }
            this.$store.dispatch(Action.CREATE_USER, newUser)
            this.$emit('goBack')
          }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/fonts-colors.scss';
.registration{
  width: 35rem;
  background-color: #FFFFFF;
  position: absolute;
  top: 10rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  z-index: 5;
  padding: 2rem;
  h2{
     font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0 0 1rem;
  }  
  span{
    display: flex;
    justify-content: space-between;
    i:hover{
      cursor: pointer;
    }
  }
  form{
  display: flex;
  flex-direction: column;
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
    input.error{
      border: 1px solid red;
    }
    small{
      color: rgb(240, 0, 0);
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
    button{
      font-weight: 600;
      &:hover{
        cursor: pointer;
      }
    }
  }
  }
}
</style>