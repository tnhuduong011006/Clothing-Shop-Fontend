<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link :to="{ name: this.Home }" class="inline-flex items-center px-10 hover:bg-gray-100 h-full">
      Home
    </router-link>
    <div class="flex items-center px-10">

      <div v-if="this.$route.path.split('/')[1] == 'admin'" class="dropdown inline-block relative">
        <button
          class="bg-white-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-8 rounded inline-flex items-center">
          <span class="mr-1">Các hiệu chỉnh khác</span>
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700">
          <router-link :to="{ name: 'productadd' }"
            class="rounded-t bg-gray-100 hover:bg-gray-200 py-2 px-6 block whitespace-no-wrap">
            Thêm mới sản phẩm
          </router-link>
          <router-link :to="{ name: 'typeadd' }" class="bg-gray-100 hover:bg-gray-200 py-2 px-6 block whitespace-no-wrap">
            Thêm mới loại sản phẩm
          </router-link>
          <router-link :to="{ name: 'typedelete' }"
            class="rounded-b bg-gray-100 hover:bg-gray-200 py-2 px-6 block whitespace-no-wrap">
            Xóa loại sản phẩm
          </router-link>
        </ul>
      </div>

      <div class="dropdown inline-block relative">
        <button
          class="bg-white-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-10 rounded inline-flex items-center">
          <span class="mr-1">Tài khoản</span>
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700">
          <router-link :to="{ name: 'adminhome' }"
            class="rounded-t bg-gray-100 hover:bg-gray-200 py-2 px-8 block whitespace-no-wrap">
            Quản trị viên
          </router-link>
          <router-link :to="{ name: 'home' }"
            class="rounded-b bg-gray-100 hover:bg-gray-200 py-2 px-8 block whitespace-no-wrap">
            Khách hàng
          </router-link>

        </ul>
      </div>

    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      Home: 'home',
    }
  },
  methods: {
    setRouteName() {
      if (this.$route.path.split('/')[1] == 'admin') {
        this.Home = 'adminhome'
      }
    }
  },
  mounted() {
    this.setRouteName();
  },
}

</script>

<style></style>