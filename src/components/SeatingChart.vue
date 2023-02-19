<script setup>
import Takasago from '../assets/svg/TakasagoDesign.svg?component'
import Table from '../components/part/Table.vue'
</script>

<template>
  <div class="h-max w-screen flex justify-center items-center bg-light-yellow flex-col">
    <img src="../assets/png/Seatingchart.png" alt="Logo" class="h-4/6 w-4/6">
    <Takasago class="h-1/6 w-3/4"></Takasago>
    <div class="flex flex-row">
      <Table label="A" class="mr-7"></Table>
      <Table label="B" class="ml-7"></Table>
    </div>
    <div class="flex flex-row mt-7">
      <Table label="C" class="mr-7"></Table>
      <Table label="D" class="ml-7"></Table>
    </div>
    <div class="flex flex-row mt-7 mb-7">
      <Table label="E" class="mr-7"></Table>
      <Table label="F" class="ml-7"></Table>
    </div>
    <img src="../assets/png/Aseat.png" alt="Logo" class="h-5/6 w-5/6">
    <img src="../assets/png/Bseat.png" alt="Logo" class="h-5/6 w-5/6">
    <img src="../assets/png/Cseat.png" alt="Logo" class="h-5/6 w-5/6">
    <img src="../assets/png/Dseat.png" alt="Logo" class="h-5/6 w-5/6">
    <img src="../assets/png/Eseat.png" alt="Logo" class="h-5/6 w-5/6">
    <img src="../assets/png/Fseat.png" alt="Logo" class="h-5/6 w-5/6">
  </div>
</template>

<style scoped>

</style>
