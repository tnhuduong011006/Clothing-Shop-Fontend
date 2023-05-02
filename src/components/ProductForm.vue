<template>
  <div class="grid grid-cols-4 pt-10">
    {{ productLocal }}
    <Form @submit="submitProduct" :validation-schema="productFormSchema" class="col-span-2 col-start-2">

      <div class="mb-6">
        <label for="ten" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sản phẩm</label>
        <Field name="ten" type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="productLocal.ten" required />
        <ErrorMessage name="ten" class="error-feedback text-red-500" />
      </div>
      <div class="mb-6">
        <label for="gia" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá sản phẩm</label>
        <Field name="gia" type="number"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="productLocal.gia" required />
        <ErrorMessage name="gia" class="error-feedback" />
      </div>

      <div class="mb-6">
        <label for="loai" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loại sản phẩm</label>
        <select id="loai" v-model="productLocal.loai"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option v-for="(type, index) in types" :key="type._id" :value="type">{{ type.ten }}</option>
        </select>
        <ErrorMessage name="loai" class="error-feedback" />
      </div>

      <div class="mb-6">
        <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link ảnh</label>
        <Field name="url" type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="productLocal.url" required />
        <ErrorMessage name="url" class="error-feedback" />
      </div>
      <div class="mb-6">
        <label for="mo_ta" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
        <textarea rows="3" cols="" name="mo_ta" type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="productLocal.mo_ta" required></textarea>
        <ErrorMessage name="mo_ta" class="error-feedback" />
      </div>
      <div class="mb-6">
        <label for="cua_hang" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cửa hàng</label>
        <Field name="cua_hang" type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="productLocal.cua_hang" required />
        <ErrorMessage name="cua_hang" class="error-feedback" />
      </div>
      <div>
        <button type="submit"
          class=" text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Lưu
        </button>
        <button v-if="productLocal._id" type="button" @click="deleteProduct"
          class="mx-10 text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Xóa
        </button>
      </div>
    </Form>

  </div>

</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import TypeService from "@/services/type.service";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:product", "delete:product"],
  props: {
    product: { type: Object, required: true },
  },
  data() {
    const productFormSchema = yup.object().shape({
      ten: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự."),
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // productLocal để liên kết với các input trên form
      productLocal: this.product,
      types: [],
      productFormSchema,
    };
  },
  methods: {
    submitProduct() {
      this.$emit("submit:product", this.productLocal);
    },
    deleteProduct() {
      this.$emit("delete:product", this.productLocal.id);
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

<style scoped></style>