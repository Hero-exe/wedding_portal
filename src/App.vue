<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center bg-white">
    <h1 className="text-2xl font-bold text-black">
      Welcome our wedding
    </h1>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <button class="text-white bg-blue-500 py-2 px-3">Primary</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
