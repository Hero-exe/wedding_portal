<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: "label"
    }
  })

  const img = `../../assets/png/${props.label}table.png`
</script>

<template>
  <div class="relative">
    <img :src="img" alt="Logo" class="h-32 w-32">
  </div>
</template>

<style scoped>

</style>
