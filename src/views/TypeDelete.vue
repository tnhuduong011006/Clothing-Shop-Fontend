<template>
  <div>
    <h4 class="text-3xl text-center py-10">Xóa loại sản phẩm</h4>

    <div class="flex justify-center overflow-x-auto mb-10">
      <table v-if="types.length > 0" class="min-w-max text-lg text-left text-gray-500 dark:text-gray-400">
        <thead class="text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Loại sản phẩm
            </th>
            <th scope="col" class="px-6 py-3">

            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(type, index) in types" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ type.ten }}
            </th>
            <td class="px-6 py-4">
              <button type="button" @click="deleteType(type._id)"
                class="mx-10 text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Xóa
              </button>
            </td>
          </tr>

        </tbody>
      </table>
      <p v-else>Không có loại sản phẩm nào.</p>
    </div>

  </div>
</template>

<script>
import TypeService from "@/services/type.service";
import ProductService from "@/services/product.service";

export default {
  data() {
    return {
      types: [],
    };
  },
  methods: {
    async deleteType(id) {
      if (confirm("Bạn muốn xóa loại sản phẩm này?\nCác sản phẩm có loại này cũng sẽ bị xóa theo")) {
        try {
          await TypeService.delete(id);
          ProductService.deleteAllByType(id);
          this.redirectReload()
        } catch (error) {
          console.log(error);
        }
      }
    },
    redirectReload() {
      this.$router
        .push({ name: "adminhome" })
        .then(() => { this.$router.go() })
    },
    async retrieveTypes() {
      try {
        this.types = await TypeService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.retrieveTypes()
  },
};
</script>