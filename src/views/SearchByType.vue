<template>
  <div class="row">
    <div class="col-md-10">
      <InputSearch v-model="searchText" />
    </div>
    <div class="mt-3 col-md-6">
      <div class="grid grid-rows-1 grid-flow-col gap-3">
        <!-- <ProductList :types=this.types 
           /> -->
        <div class="grid-cols-1 gap-4">

          <ul
            class="mx-5 w-65 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="font-bold w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Danh mục
            </li>
            <router-link :to="{ name: 'byType', params: { typeid: type._id } }" v-for="(type, index) in types"
              :key="type._id">
              <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100">{{ type.ten }}
              </li>
            </router-link>
          </ul>


        </div>
        <div class="grid grid-cols-3 gap-4 px-10">
          <ProductShow :products="products" />

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductService from "@/services/product.service";
import ProductShow from "../components/ProductShow.vue";
import TypeService from "@/services/type.service";


import ProductList from "../components/ProductList.vue";

export default {
  data() {
    return {
      products: [],
      types: []
    }
  },
  components: {
    ProductShow,
    ProductList
  },
  props: {
    typeid: { type: String, required: true },
  },
  methods: {
    async retrieveProductsByType() {
      try {
        this.products = await ProductService.getByTypeID(this.typeid);
      } catch (error) {
        console.log(error);
      }
    },
    async retrieveTypes() {
      try {
        this.types = await TypeService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveProductsByType();
      this.retrieveTypes();
    },
  },
  mounted() {
    this.refreshList()
  },
}
</script>
  
<style scoped></style>
