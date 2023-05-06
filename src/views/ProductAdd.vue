<template>
  <div>
    <h4 class="text-3xl text-center pt-10">Thêm mới Sản phẩm</h4>
    <ProductForm :product="product" @submit:product="createProduct" />
    <p class="text-green-600 flex justify-center">{{ message }}</p>
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
import ProductService from "@/services/product.service";

export default {
  components: {
    ProductForm,
  },
  data() {
    return {
      product: null,
      message: "",
    };
  },
  methods: {

    async createProduct(data) {
      try {
        const result = await ProductService.create(data);
        console.log(result)
        this.message = "Sản phẩm được thêm thành công.";
        this.$router.push({
          name: "adminProductDetail",
          params: {
            id: result._id
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      } catch (error) {
        console.log(error);
      }
    },

  },
  created() {
    // this.getProduct(this.id);
    this.product = {
      ten: '',
      gia: '',
      loai: '',
      url: '',
      mo_ta: '',
      cua_hang: ''
    };
    this.message = "";
  },
};
</script>