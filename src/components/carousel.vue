<template>
  <div class="carousel">

    <h2>{{mockTag}}</h2>

          <ul>
            <li v-for="product of carouselProducts" :key="product.id">
              <ProductItem small />
            </li>
          </ul>
        <div class="carousel-nav">
        <button @click="updatePageCounter('back')">back</button>
        <div class="circle" :class="{active: isActive.first}"></div>
        <div class="circle" :class="{active: isActive.second}"></div>
        <div class="circle" :class="{active: isActive.third}"></div>
        <button @click="updatePageCounter('forward')">forward</button>

        </div>
  </div>
</template>

<script>
import ProductItem from '@/components/productItem.vue'
export default {
  components: {ProductItem},
  data(){return{
    // props: ['tag'],
    mockTag: 'Favourites',
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
      currentPage: 1,
      isActive:{
        first: true,
        second: false,
        third: false,
  
      }
      
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
      this.isActive.first = false
      this.isActive.second = false
      this.isActive.third = false

      if(this.currentPage == 1){
        this.isActive.first = true
      }
      else if(this.currentPage==2){
        this.isActive.second = true
      }
      else{
        this.isActive.third = true
      }

    }
  },
  computed:{
    carouselProducts(){
      return this.mockProducts.slice(this.start, this.end)
    },
  }
};
</script>

<style scoped lang="scss">
@import '../assets/styles/fonts-colors.scss';
@import '../assets/styles/mixins.scss';
.carousel{
  @include flex-col-center;
  background-color: rgb(212, 212, 212);
  align-items: center;
  width: 80%;
  height: fit-content;
}
.productItem{
  height: 100px;
  width: 70px;
}
ul{
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
}
h2{
  text-align: center;
}
.carousel-nav{
  display: flex;
  flex-direction: row;
}
.circle{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: $grey;
}

.active{
  background-color: black;
}




</style>
