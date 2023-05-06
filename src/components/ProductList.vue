<template>
  <!-- <div class="grid grid-rows-1 grid-flow-col gap-3"> -->
  <div class="grid-cols-1 gap-4 mb-32">

    <ul
      class="mx-5 w-max text-lg text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li
        class="text-white bg-blue-500 font-medium w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        Danh mục</li>
      <router-link :to="{ name: this.byType, params: { typeid: type._id } }" v-for="(type, index) in types" :key="type._id">
        <li class="font-sans w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100">{{ type.ten
        }}</li>
      </router-link>
    </ul>


  </div>
</template> 

<script>
import { computed, onMounted, ref, watch } from 'vue'
import ProductShow from "../components/ProductShow.vue";
import store from '../store';

export default {
  data() {
    return {
      keyword: ref(''),
      byType: 'byType',
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
    setRouteName() {
      if (this.$route.path.split('/')[1] == 'admin') {
        this.byType = 'adminByType'
      }
    },
    updateActiveIndex(index) {
      product.$emit("update:activeIndex", index);
    },
  },
  mounted() {
    this.setRouteName();
  },
}
</script>