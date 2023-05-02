<template>
  <div>
    <div class="row">
      <div class="col-md-10">
        <InputSearch v-model="searchText" />
      </div>
      <div class="mt-3 col-md-6">
        <div class="grid grid-rows-1 grid-flow-col gap-3">
          <ProductList :types="types" />
          <div class="grid grid-cols-3 gap-4 px-10">
            <ProductShow :products="products"/>
      
          </div>
          
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'
import store from '../store';

import InputSearch from '../components/InputSearch.vue'
import FooterPage from '../components/FooterPage.vue'
import ProductCard from "@/components/ProductCard.vue";
import ProductList from "@/components/ProductList.vue";
import ProductService from "@/services/product.service";
import TypeService from "@/services/type.service";
import ProductEdit from '../views/ProductEdit.vue'
import ProductShow from "../components/ProductShow.vue";

export default {
  components: {
    ProductCard,
    InputSearch,
    FooterPage,
    ProductList,
    ProductEdit,
    ProductShow
  },
  data() {
    return {
      products: [],
      activeIndex: -1,
      searchText: "",
      products: ref([]),
      types: ref([]),
      keyword: ref(''),
      userRole : { 
        ADMIN: 'admin',
        BASIC: 'basic'
       },
    };
  },
  props: {
    typeid: { type: String },
    name: { type: String },
    currentRole : { type: String},
  },
  watch: {
    // Giám sát các thay đổi của biến searchText.
    // Bỏ chọn phần tử đang được chọn trong danh sách.
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    // Chuyển các đối tượng product thành chuỗi để tiện cho tìm kiếm.
    productStrings() {
      return this.products.map((product) => {
        const { ten, gia, loai, url, mo_ta, cua_hang, slug } = product;
        return [ten, gia, loai, url, mo_ta, cua_hang, slug].join("");
      });
    },
    filteredProducts() {
      if (!this.searchText) return this.products;
      console.log(this.searchText)
      return this.products.filter((_product, index) =>
        this.productStrings[index].includes(this.searchText)
      );
    },
    activeProduct() {
      if (this.activeIndex < 0) return null;
      return this.filteredProducts[this.activeIndex];
    },
    filteredProductsCount() {
      return this.filteredProducts.length;
    },
  },
  methods: {
    async retrieveProducts() {
      try {
        this.products = await ProductService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    async retrieveProductsByType() {
      try {
        this.products = await ProductService.getByTypeID(this.typeid);
      } catch (error) {
        console.log(error);
      }
    },
    async retrieveProductsByIndex() {
      try {
        this.products = await ProductService.getIndex(this.name);
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
      if (this.name) this.retrieveProductsByIndex()
      else
      if (this.typeid == null ) this.retrieveProducts()
      else
      this.retrieveProductsByType();
      
      this.retrieveTypes()
      this.activeIndex = -1;
    },
    async removeAllProducts() {
      if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
        try {
          await ProductService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
  mounted() {
    this.refreshList()
  },

};

</script>

<style></style>