<script setup>
  import { defineProps } from 'vue';

  defineProps({
  name1: {
    type: String
  },
  name2: {
    type: String
  }
})
</script>

<template>
  <p class="text-black text-xl w-40">{{ name1 }}</p>
  <p class="text-black text-xl w-40">{{ name2 }}</p>
</template>

<style scoped>

</style>
