<template>
  <!-- <div class="grid grid-rows-1 grid-flow-col gap-3"> -->
    <div class="grid-cols-1 gap-4 mb-32">
      
      <ul
        class="mx-5 w-max text-lg text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="text-white bg-blue-500 font-medium w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Danh mục</li>
        <router-link :to="{ name: 'byType', params: { typeid: type._id }}" 
                      v-for="(type, index) in types" :key="type._id"
                      >
          <li class="font-sans w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100">{{ type.ten }}</li>
        </router-link>
      </ul>


    </div>
    <!-- <div class="grid grid-cols-3 gap-4 px-10">
      <ProductShow :products="products"/> -->
      <!-- <div v-for="(product, index) in products" :key="product._id" :class="{ active: index === activeIndex }"
        @click="updateActiveIndex(index)">
        <router-link :to="{name:'productDetail', params:{id: product._id}}" >

          <div class="h-full max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" :src="product.url" :alt="product.ten">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ product.ten }}</div>
            </div>
            <div class="flex justify-start">
              <div class="px-10 font-semibold text-lg text-red-600">
                {{ product.gia.toLocaleString("en-US") }}₫
              </div>
             
            </div>
            <div class="px-6 pt-4 pb-2">
  
            </div>
          </div>

        </router-link>
        
      </div> -->

    <!-- </div> -->
  <!-- </div> -->
</template> 

<script>
  import { computed, onMounted, ref, watch } from 'vue'
  import ProductShow from "../components/ProductShow.vue";
  import store from '../store';

  export default{
    data() {
      return {
        keyword: ref(''),
        meals:ref([]),
      }
    },
    components: {
      ProductShow,
    },
    props: {
      types: { type: Array, default: [] },
    },
    emits: ["update:activeIndex"],
    computed: {
      showProducts() {
        this.meals = store.state.searchProductByType;
        return this.meals
      }
    },
    methods: {
      updateActiveIndex(index) {
        product.$emit("update:activeIndex", index);
      },
    }
  }
</script>