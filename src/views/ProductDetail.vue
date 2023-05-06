<template>
  <div class="grid grid-cols-7 gap-4 py-10">
    <div class="col-start-1 col-span-3 w-full pl-10">
      <img :src="product.url" :alt="product.ten">
    </div>
    <div class="col-start-5 col-span-3 w-full pr-10">
      <h1 class="text-2xl pb-3 font-bold">{{ product.ten }}</h1>
      <ul>
        <li class="text-red-500 font-bold text-xl mb-5">
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
          Mô tả:<br /><div v-html="product.mo_ta" ></div>
        </li>
        <li class="py-5">
          <router-link v-if=" this.$route.path.split('/')[1] == 'admin'  " :to="{ name: 'product.edit', params:{id : id}}" :id=id  class="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-10 rounded">Hiệu chỉnh sản phẩm</router-link>
          
        </li>

      </ul>

    </div>

  </div>
</template>
  
<script>
import ProductService from "@/services/product.service";

export default {
  data() {
    return {
      product: {},
    }
  },
  props: {
    id: { type: String },
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
  