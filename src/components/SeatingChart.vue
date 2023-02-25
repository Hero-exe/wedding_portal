<script setup>
import Takasago from '../assets/svg/TakasagoDesign.svg?component'
import Table from '../components/part/Table.vue'

window.addEventListener( 'scroll' ,() => {
  const scrollAnimationElm = document.querySelectorAll('.scroll-right-seatingchart')
  const scrollAnimationFunc = function () {
    for (let i = 0; i < scrollAnimationElm.length; i++) {
      const triggerMargin = 150
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on')
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});
</script>

<template>
  <div id="seatingDisplay" class="h-max w-screen flex justify-center items-center bg-light-honeydew flex-col">
    <img src="../assets/png/Seatingchart.png" alt="Logo" class="h-4/6 w-4/6 scroll-right-seatingchart">
    <Takasago class="h-1/6 w-3/4 scroll-right-seatingchart"></Takasago>
    <div class="flex flex-row scroll-right-seatingchart">
      <div class="mr-7 relative">
        <img src="../assets/png/Atable.png" alt="Logo" class="h-32 w-32">
      </div>
      <div class="ml-7 relative">
        <img src="../assets/png/Btable.png" alt="Logo" class="h-32 w-32">
      </div>
    </div>
    <div class="flex flex-row mt-7 scroll-right-seatingchart">
      <div class="mr-7 relative">
        <img src="../assets/png/Ctable.png" alt="Logo" class="h-32 w-32">
      </div>
      <div class="ml-7 relative">
        <img src="../assets/png/Dtable.png" alt="Logo" class="h-32 w-32">
      </div>
    </div>
    <div class="flex flex-row mt-7 mb-7 scroll-right-seatingchart">
      <div class="mr-7 relative">
        <img src="../assets/png/Etable.png" alt="Logo" class="h-32 w-32">
      </div>
      <div class="ml-7 relative">
        <img src="../assets/png/Ftable.png" alt="Logo" class="h-32 w-32">
      </div>
    </div>
    <img src="../assets/png/Aseat.png" alt="Logo" class="h-5/6 w-5/6 scroll-right-seatingchart">
    <img src="../assets/png/Bseat.png" alt="Logo" class="h-5/6 w-5/6 scroll-right-seatingchart">
    <img src="../assets/png/Cseat.png" alt="Logo" class="h-5/6 w-5/6 scroll-right-seatingchart">
    <img src="../assets/png/Dseat.png" alt="Logo" class="h-5/6 w-5/6 scroll-right-seatingchart">
    <img src="../assets/png/Eseat.png" alt="Logo" class="h-5/6 w-5/6 scroll-right-seatingchart">
    <img src="../assets/png/Fseat.png" alt="Logo" class="h-5/6 w-5/6 scroll-right-seatingchart">
  </div>
</template>

<style scoped>

.scroll-right-seatingchart {
    -webkit-transition: 0.8s ease-in-out;
    -moz-transition: 0.8s ease-in-out;
    -o-transition: 0.8s ease-in-out;
    transition: 0.8s ease-in-out;
    transform: translateX(30px);
    opacity: 0;
    filter: alpha(opacity=0);
    -moz-opacity: 0;
}
.scroll-right-seatingchart.on {
    opacity: 1.0;
    filter: alpha(opacity=100);
    -moz-opacity: 1.0;
    transform: translateX(0);
}

</style>
