<template>
  <div class="flex gap-3 justify-center mt-2">
    <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">{{ letter }}</router-link>

  </div>
  

</template>

<script>

export default{
  data() {
    return {
      letters : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(""),
    }
  }
}
  
</script>

<style>

</style>