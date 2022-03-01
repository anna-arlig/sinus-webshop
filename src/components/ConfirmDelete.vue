<template>
  <div class="confirm">
    <dialog id="dialog" open>
      <p>Are you sure that you want to delete this product?</p>
      <button class="yes" @click="$emit('removeProduct')">Yes</button>
      <button class="no" @click="$emit('closeDelete')">No</button>
    </dialog>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";

button {
  border: 1px solid $teal;
  border-radius: 3px;
  text-transform: uppercase;
  min-width: 182px;
  min-height: 35px;
  margin: 15px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(1.1);
  }
}

.yes {
  background-color: $teal;
  color: white;
}

.no {
  background-color: white;
  color: $teal;
}
</style>
