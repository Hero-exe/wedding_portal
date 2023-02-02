<script setup>
import Header from './components/Header.vue'
import SeatingChart from './components/SeatingChart.vue'
import FoodMenu from './components/FoodMenu.vue'
import TimeSchedule from './components/TimeSchedule.vue'
import PhotoUpload from './components/PhotoUpload.vue'
import Greeting from './components/Greeting.vue'
</script>

<template>
  <Header />
  <SeatingChart />
  <FoodMenu />
  <TimeSchedule />
  <!-- <PhotoUpload /> TODO:UPLOAD機能を作るならFirestrageを使う -->
  <Greeting />
</template>

<style scoped>

</style>
