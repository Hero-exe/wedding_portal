<script setup>
import 'flowbite'

const scrollJump = (target) => {
  const element = document.getElementById(target)
  element.scrollIntoView({behavior: 'smooth'})
  document.getElementById('speed-dial-menu-text-inside-button').classList.add('hidden')
}
</script>

<template>
  <div data-dial-init class="fixed bottom-6 right-6 group">
    <div id="speed-dial-menu-text-inside-button" class="flex flex-col items-center hidden mb-4 space-y-2">
      <button type="button" @click="scrollJump('topDisplay')"
        class="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
        <svg class="w-6 h-6 mx-auto mt-px" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
          </path>
        </svg>
        <span class="block mb-px text-xs font-medium">TOP</span>
      </button>
      <button type="button" @click="scrollJump('seatingDisplay')"
        class="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
        <svg aria-hidden="true" class="w-6 h-6 mx-auto mt-px" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
          </path>
        </svg>
        <span class="block mb-px text-xs font-medium">席次表</span>
      </button>
      <button type="button" @click="scrollJump('menuDisplay')"
        class="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
        <svg aria-hidden="true" class="w-6 h-6 mx-auto mt-px" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path fill-rule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clip-rule="evenodd"></path>
        </svg>
        <span class="block mb-px text-xs font-medium">メニュー</span>
      </button>
      <button type="button" @click="scrollJump('timescheduleDisplay')"
        class="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
        <svg class="w-6 h-6 mx-auto mt-px" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z">
        </path>
      </svg>
      <span class="block mb-px text-xs font-medium">進行表</span>
    </button>
    <button type="button" @click="scrollJump('greetingDisplay')"
      class="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
      <svg aria-hidden="true" class="w-6 h-6 mx-auto mt-px" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clip-rule="evenodd"></path>
      </svg>
      <span class="block mb-px text-xs font-medium">挨拶</span>
    </button>
  </div>
  <button type="button" data-dial-toggle="speed-dial-menu-text-inside-button" id="menuButton"
    aria-controls="speed-dial-menu-text-inside-button" aria-expanded="false"
    class="flex items-center justify-center text-white bg-sky-300 rounded-full w-14 h-14 hover:bg-sky-500 dark:bg-sky-400 dark:hover:bg-sky-300 focus:ring-4 focus:ring-sky-300 focus:outline-none dark:focus:ring-sky-800">
    <svg aria-hidden="true" class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
    </svg>
    <span class="sr-only">Open actions menu</span>
  </button>
</div></template>

<style scoped>

</style>
