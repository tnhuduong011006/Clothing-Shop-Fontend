<template>
  <router-view :key="$route.fullPath" />
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar,
  }
}
</script>

<style scoped></style>
