<template>
  <div class="grid grid-cols-7 gap-4 py-10">
    <div class="col-start-1 col-span-3 w-full pl-10">
      <img :src="product.url" :alt="product.ten">
    </div>
    <div class="col-start-5 col-span-3 w-full pr-10">
      <h1 class="text-2xl pb-5 font-bold">{{ product.ten }}</h1>
      <ul>
        <li class="text-red-500 font-bold text-xl">
          {{ product.gia?.toLocaleString("en-US") }}₫
        </li>
        <li >
          <table>
            <tr>
                <td> Loại sản phẩm: </td>
                <td>
                  <div v-for="(value, name) in product">
                    {{ value.ten }}
                  </div>
                </td>
            </tr>
          </table>
        </li>
        
        <li>
          Cửa hàng: {{ product.cua_hang }}
        </li>
        <li>
          Mô tả:<br />{{ product.mo_ta }}
        </li>
        <li class="py-5">
          <router-link v-if=" this.$route.path.split('/')[1] == 'admin'  " :to="{ name: 'product.edit', params:{id : id}}" :id=id  class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-10 rounded">Hiệu chỉnh sản phẩm</router-link>
          
        </li>

      </ul>

    </div>

  </div>
</template>
  
<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductService from "@/services/product.service";

export default {
  data() {
    return {
      product: {},
    }
  },
  props: {
    id: { type: Array, default: [] },
  },
  emits: ["update:activeIndex"],
  computed: {
    getType() {
      return this.product.loai
    }
  },
  methods: {
    async retrieveProducts() {
      try {
        this.product = await ProductService.get(this.id);
        console.log(this.product)
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.retrieveProducts()
  },

}

</script>
  
<style scoped></style>
  