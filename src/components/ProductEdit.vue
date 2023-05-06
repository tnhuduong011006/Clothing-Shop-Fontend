<template>
  <div v-if="product">
    <h4 class="text-3xl text-center pt-10">Hiệu chỉnh sản phẩm</h4>
    <ProductForm :product="product" @submit:product="updateProduct" @delete:product="deleteProduct" />
    <!-- <p>{{ message }}</p> -->
  </div>
</template>

<script>

import ProductForm from "@/components/ProductForm.vue";
import ProductService from "@/services/product.service";

export default {
  components: {
    ProductForm,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      product: null,
      message: "",
    };
  },
  methods: {

    async getProduct(id) {
      try {
        this.product = await ProductService.get(id);
      } catch (error) {
        console.log(error);
        // console.log(this.$route.path.split("/").slice(1))
        // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
        this.$router.push({
          name: "notfound",
          params: {
            pathMatch: this.$route.path.split("/").slice(1)
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });

      }
    },

    async updateProduct(data) {
      try {
        await ProductService.update(this.product._id, data);
        this.message = "Liên hệ được cập nhật thành công.";
        this.$router.push({
          name: "adminhome",
          params: {
            pathMatch: this.$route.path.split("/").slice(1)
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      } catch (error) {
        console.log(error);
      }
    },

    async deleteProduct() {
      if (confirm("Bạn muốn xóa Liên hệ này?")) {
        try {
          await ProductService.delete(this.product._id);
          this.$router.push({
          name: "adminhome",
          params: {
            pathMatch: this.$route.path.split("/").slice(1)
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
        console.log(this.$route.path.split("/").slice(1))
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  created() {
    this.getProduct(id);
    this.message = "";
  },
};
</script>