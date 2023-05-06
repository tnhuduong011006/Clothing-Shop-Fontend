<template>
  <div v-for="(product, index) in products" :key="product._id">
    <router-link :to="{ name: this.ProductDetail, params: { id: product._id } }">

      <div class="h-auto max-w-sm max-h-max rounded overflow-hidden shadow-lg hover:scale-105 transition-all pb-10">
        <img class="w-full h-80" :src="product.url" :alt="product.ten">
        <div class="px-6 py-4">
          <div class="font-sans text-xl mb-2">{{ product.ten }}</div>
        </div>
        <div class="flex justify-start">
          <div class="px-10 font-sans text-lg text-red-600">
            {{ product.gia.toLocaleString("en-US") }}₫
          </div>

        </div>
        <div class="px-6 pt-4 pb-2">

        </div>
      </div>

    </router-link>

  </div>
</template>
      
<script>
export default {
  data() {
    return {
      ProductDetail: 'productDetail',
    }
  },
  methods: {
    setRouteName() {
      if (this.$route.path.split('/')[1] == 'admin'){
        this.ProductDetail = 'adminProductDetail'
      }
    }
  },
  props: {
    products: { type: Array, default: [] }
  },
  mounted() {
    this.setRouteName();
  },
}

</script>
      
<style scoped></style>
      