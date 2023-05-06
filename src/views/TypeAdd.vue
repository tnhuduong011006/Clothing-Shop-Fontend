<template>
  <div>
    <h4 class="text-3xl text-center pt-10">Thêm mới loại sản phẩm</h4>
    <TypeForm :type="type" @submit:type="createType" />
    <p class="text-green-600 flex justify-center">{{ message }}</p>
  </div>
</template>

<script>
import TypeForm from "@/components/TypeForm.vue";
import TypeService from "@/services/type.service";

export default {
  components: {
    TypeForm,
  },
  data() {
    return {
      type: null,
      message: "",
    };
  },
  methods: {

    async createType(data) {
      try {
        await TypeService.create(data);
        this.message = "Loại sản phẩm được thêm thành công.";
        this.$router.push({
          name: "typedelete",
          query: this.$route.query,
          hash: this.$route.hash,
        });
      } catch (error) {
        console.log(error);
      }
    },

  },
  created() {
    this.type = {
      ten: ''
    };
    this.message = "";
  },
};
</script>