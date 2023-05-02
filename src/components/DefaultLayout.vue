<template>
  <div class="bg-gray-100">
    <Navbar />
    
    <main>
      <router-view />
    </main>
    <!-- <pre>{{ products }}</pre> -->

  </div>
</template>

<script setup>
  import Navbar from '../components/Navbar.vue'

</script>

<style scoped></style>
