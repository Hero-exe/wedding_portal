<script setup>
  import { defineProps } from 'vue';

  defineProps({
  label: {
    type: String,
    default: "label"
  }
})
</script>

<template>
  <div class="relative">
    <img src="../../assets/png/TableDesign.png" alt="Logo" class="h-32 w-32">
    <h1 class="text-7xl font-bold text-black absolute top-1/2 left-2">{{ label }}</h1>
  </div>
</template>

<style scoped>

</style>
