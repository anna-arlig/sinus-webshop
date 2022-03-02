<template>
  <dialog open class="create">
    <i @click="$emit('close')"><Icon icon="mdi:close" width="25" /></i>
    <h2>Create a new product</h2>
    <form @submit.prevent="newProduct">
      <ul>
        <li>
          <label for="title">Title</label>
          <input type="text" name="title" v-model="title" />
        </li>
        <li>
          <label for="category">Category</label>
          <select name="category" v-model="category">
            <option value="cap">cap</option>
            <option value="hoodie">hoodie</option>
            <option value="wheel">wheel</option>
            <option value="tshirt">tshirt</option>
            <option value="totebag">totebag</option>
            <option value="skateboard">skateboard</option>
            <option value="socks">socks</option>
          </select>
        </li>
        <li>
          <label for="price">Price</label>
          <input type="number" name="price" v-model="price" />
        </li>
        <li>
          <label for="specialEdition">Special edition?</label>
          <select name="specialEdition" v-model="specialEdition">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </li>
        <li>
          <label for="shortDesc">Short description</label>
          <input type="text" name="shortDesc" v-model="shortDesc" />
        </li>
        <li>
          <label for="longDesc">Long description</label>
          <textarea
            name="longDesc"
            cols="30"
            rows="10"
            v-model="longDesc"
          ></textarea>
        </li>
        <li>
          <label for="imgFile">Image file</label>
          <input type="text" name="imgFile" v-model="imgFile" />
        </li>
        <input type="submit" value="Add new product" />
      </ul>
    </form>
  </dialog>
</template>

<script>
import { Icon } from "@iconify/vue2";
import Action from "@/store/Action.types";
export default {
  components: { Icon },
  data() {
    return {
      title: "",
      category: "",
      price: null,
      specialEdition: null,
      shortDesc: "",
      longDesc: "",
      imgFile: "",
    };
  },
  methods: {
    async newProduct() {
      const newProduct = {
        title: this.title,
        category: this.category,
        price: this.price,
        specialEdition: this.specialEdition,
        shortDesc: this.shortDesc,
        longDesc: this.longDesc,
        imgFile: this.imgFile,
      };
      await this.$store.dispatch(Action.CREATE_PRODUCT, newProduct);
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/fonts-colors.scss";
@import "@/assets/styles/mixins.scss";
.create {
  @include flex-col-center;
}
li {
  @include flex-left;
}
label {
  font-family: $paragraph;
  margin-top: 10px;
}

input[type="submit"] {
  border: 1px solid $teal;
  border-radius: 3px;
  text-transform: uppercase;
  min-width: 182px;
  min-height: 35px;
  margin: 15px;
  margin-top: 40px;
  background-color: $teal;
  color: white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    transform: scale(1.1);
  }
}
</style>
