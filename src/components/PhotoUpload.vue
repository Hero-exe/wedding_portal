<script>

</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center bg-light-snow flex-col">
    <h1 className="text-2xl font-bold text-black pb-8">
      PhotoUpload
    </h1>
    <div class="flex items-center justify-center w-full">
      <label for="dropzone-file" class="flex flex-col items-center justify-center w-80 h-32 border-2 border-gray-300 border-dashed rounded-lg dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Touch to upload</span></p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" @change="uploadImage" />
      </label>
    </div>
  </div>
</template>

<style scoped>

</style>
