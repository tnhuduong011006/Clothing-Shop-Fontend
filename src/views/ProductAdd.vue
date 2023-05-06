<template>
  <div>
    <h4 class="text-3xl text-center pt-10">Thêm mới Sản phẩm</h4>
    <ProductForm :product="product" @submit:product="createProduct" />
    <p>{{ message }}</p>
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
        await ProductService.create(data);
        this.message = "Liên hệ được thêm thành công.";
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