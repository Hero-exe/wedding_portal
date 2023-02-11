<script setup>
import Takasago from '../assets/svg/TakasagoDesign.svg?component'
import Table from '../components/part/Table.vue'
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center bg-light-yellow flex-col">
    <h1 class="text-2xl font-bold text-black">
      Seating Chart
    </h1>
    <Takasago class="h-1/5 w-3/4"></Takasago>
    <!--<div class="flex flex-row">-->
      <Table></Table>
    <!--</div>-->
  </div>
</template>

<style scoped>

</style>
