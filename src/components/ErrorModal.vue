<template>
  <dialog v-if="error" open class="error-modal">
      <p>{{error}}</p>
      <button @click="close">OK</button>
  </dialog>
</template>

<script>
import Action from "@/store/Action.types.js"
export default {
  computed:{
    error(){
      return this.$store.state.error.messageOnModal
    }, 
  }, 
  methods:{
      close(){
        this.$store.dispatch(Action.CLEAR_ERROR_ON_MODAL)
      }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/fonts-colors.scss";
.error-modal{
  z-index: 3;
  border: 1px solid red;
  border-radius: 2px;
  color: red;
  display: flex;
  flex-direction: column;
  button{
    border-radius: 4px;
    padding: 0.5rem 3rem;
    text-align: center;
    color: red;
    border: 1px solid red;
    background-color: #FFFFFF;
    text-transform: uppercase;
    font-weight: 500;
    box-shadow: (0px 3px 4px rgba(0, 0, 0, 0.25));
    &:hover{
      cursor: pointer;
    }
  }
}
</style>