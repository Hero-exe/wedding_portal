<script setup>
import Takasago from '../assets/svg/TakasagoDesign.svg?component'
import Table from '../components/part/Table.vue'
import SeatName from '../components/part/SeatName.vue'
</script>

<template>
  <div class="h-max w-screen flex justify-center items-center bg-light-yellow flex-col">
    <h1 class="text-2xl font-bold text-black mt-7">
      Seating Chart
    </h1>
    <Takasago class="h-1/5 w-3/4"></Takasago>
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
    <p class="text-7xl font-bold text-black mt-7">
      A
    </p>
    <div class="flex flex-row text-right">
      <SeatName name1="池田 雄星 様" name2="奥山 梨雪 様"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="内藤 翼 様" name2="丸山 直也 様"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="小菅 善治 様" name2=""></SeatName>
    </div>
    <p class="text-7xl font-bold text-black mt-7">
      B
    </p>
    <div class="flex flex-row text-right">
      <SeatName name1="本永 侑里 様" name2="安髙 沙也加 様"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="畑田 幸紀 様" name2="石井 希映 様"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="小田 瑞穂 様" name2=""></SeatName>
    </div>
    <p class="text-7xl font-bold text-black mt-7">
      C
    </p>
    <div class="flex flex-row text-right">
      <SeatName name1="宮木 有也子 様" name2="比嘉 香代子 様"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="橋本 小津枝 様" name2="田中 彩佳 様"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="田中 真菜美 様" name2="田中 聖馬 様"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="田中 明日菜 様" name2=""></SeatName>
    </div>
    <p class="text-7xl font-bold text-black mt-7">
      D
    </p>
    <div class="flex flex-row text-right">
      <SeatName name1="梅田 彩加 様" name2="荒木 みなみ 様"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="荒木 華奈子 様" name2="荒木 湊斗 くん"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="荒木 玲来 ちゃん" name2="荒木 健斗 様"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="荒木 凱斗 様" name2=""></SeatName>
    </div>
    <p class="text-7xl font-bold text-black mt-7">
      E
    </p>
    <div class="flex flex-row text-right">
      <SeatName name1="礒 稔真 様" name2="三浦 賢治 様"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="安井 薫 様" name2="安井 秀樹 様"></SeatName>
    </div>
    <p class="text-7xl font-bold text-black mt-7">
      F
    </p>
    <div class="flex flex-row text-right">
      <SeatName name1="荒木 ひとみ 様" name2="真鍋 賢二 様"></SeatName>
    </div>
    <div class="flex flex-row mt-2 text-right">
      <SeatName name1="荒木 健 様" name2="荒木 恵 様"></SeatName>
    </div>
  </div>
</template>

<style scoped>

</style>
