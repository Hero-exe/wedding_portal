<script setup>

window.addEventListener( 'scroll' ,() => {
  const scrollAnimationElm = document.querySelectorAll('.scroll-right-greeting')
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
    <div class="h-screen w-screen flex justify-center items-center bg-light-lotion">
      <img src="../assets/png/Greeting.png" alt="Logo" class="h-5/6 scroll-right-greeting">
  </div>
</template>

<style scoped>

.scroll-right-greeting {
    -webkit-transition: 0.8s ease-in-out;
    -moz-transition: 0.8s ease-in-out;
    -o-transition: 0.8s ease-in-out;
    transition: 0.8s ease-in-out;
    transform: translateX(30px);
    opacity: 0;
    filter: alpha(opacity=0);
    -moz-opacity: 0;
}
.scroll-right-greeting.on {
    opacity: 1.0;
    filter: alpha(opacity=100);
    -moz-opacity: 1.0;
    transform: translateX(0);
}

</style>
