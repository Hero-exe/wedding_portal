<script setup>

window.addEventListener( 'scroll' ,() => {
  const scrollAnimationElm = document.querySelectorAll('.scroll-right-timeschedule')
  const scrollAnimationFunc = function () {
    for (let i = 0; i < scrollAnimationElm.length; i++) {
      const triggerMargin = 200
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
    <div id="timescheduleDisplay" class="h-screen w-screen flex justify-center items-center bg-light-white-smoke">
      <img src="../assets/png/Timeschedule.png" alt="Logo" class="h-5/6 scroll-right-timeschedule">
  </div>
</template>

<style scoped>

.scroll-right-timeschedule {
    -webkit-transition: 0.8s ease-in-out;
    -moz-transition: 0.8s ease-in-out;
    -o-transition: 0.8s ease-in-out;
    transition: 0.8s ease-in-out;
    transform: translateX(30px);
    opacity: 0;
    filter: alpha(opacity=0);
    -moz-opacity: 0;
}
.scroll-right-timeschedule.on {
    opacity: 1.0;
    filter: alpha(opacity=100);
    -moz-opacity: 1.0;
    transform: translateX(0);
}

</style>
