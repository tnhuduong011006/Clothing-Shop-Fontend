<template>
  <div class="grid grid-cols-4 pt-10">
    <!-- {{ typeLocal }} -->
    <Form @submit="submitType" :validation-schema="typeFormSchema" class="col-span-2 col-start-2">

      <div class="mb-6">
        <label for="ten" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sản phẩm</label>
        <Field name="ten" type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="typeLocal.ten" required />
        <ErrorMessage name="ten" class="error-feedback text-red-500" />
      </div>
      <div>
        <button type="submit"
          class=" text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Lưu
        </button>
        <button v-if="typeLocal._id" type="button" @click="deleteType"
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
  emits: ["submit:type", "delete:type"],
  props: {
    type: { type: Object, required: true },
  },
  data() {
    const typeFormSchema = yup.object().shape({
      ten: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự."),
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // typeLocal để liên kết với các input trên form
      typeLocal: this.type,
      types: [],
      typeFormSchema,
    };
  },
  methods: {
    submitType() {
      this.$emit("submit:type", this.typeLocal);
    },
    deleteType() {
      this.$emit("delete:type", this.typeLocal.id);
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