<template>
  <div class="carousel">

        <ul>
          <li v-for="product of carouselPruducts" :key="product.id">
            <div class="productItem" :style="{backgroundColor: product.color}"></div>
          </li>
        </ul>
        <button @click="updatePageCounter('back')">back</button>
        <button @click="updatePageCounter('forward')">forward</button>
  </div>
</template>

<script>
export default {
  data(){return{
      mockProducts: [
        {id: 1,
        color: 'green',
        },
        {id: 2,
        color: 'blue',
        },
        {id: 3,
        color: 'red',
        },
        {id: 4,
        color: 'yellow',
        },
        {id: 5,
        color: 'brown',
        },
        {id: 6,
        color: 'purple',
        },
        {id: 7,
        color: 'beige',
        },
        {id: 8,
        color: 'grey',
        },
        {id: 9,
        color: 'black',
        },
        {id: 10,
        color: 'lightgreen',
        },
        {id: 11,
        color: 'lightred',
        },
        {id: 12,
        color: 'lightblue',
        },
      ],
      start: 0,
      end: 3,
      currentPage: 1
  }
  },
  methods:{
    updatePageCounter(direction){
      if(direction === 'back' && this.currentPage > 1){
        this.start -= 3
        this.end -= 3
        this.currentPage --
      }
      else if(direction === 'forward' && this.end<this.mockProducts.length -3){
        this.start += 3
        this.end += 3
        this.currentPage ++
      }
    }
  },
  computed:{
    carouselProducts(){
      return this.mockProducts.slice(this.start, this.end)
    }
  }
};
</script>

<style>
.productItem{
  height: 100px;
  width: 70px;
}


</style>
