<script setup>

window.addEventListener('DOMContentLoaded', () => {
  // コンテナを指定
  const section = document.querySelector('.cherry-blossom-container');

  // 花びらを生成する関数
  const createPetal = () => {
    const petalEl = document.createElement('span');
    petalEl.className = 'petal';
    const minSize = 10;
    const maxSize = 15;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    petalEl.style.width = `${size}px`;
    petalEl.style.height = `${size}px`;
    petalEl.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(petalEl);

    // 一定時間が経てば花びらを消す
    setTimeout(() => {
      petalEl.remove();
    }, 10000);
  }

  // 花びらを生成する間隔をミリ秒で指定
  setInterval(createPetal, 500);
});

</script>

<template>
    <div class="h-screen w-screen flex justify-center items-center bg-light-cherry cherry-blossom-container">
    <div class="relative h-96 w-96 z-10 fadeIn">
      <img src="../assets/svg/WelcomeText.svg" alt="Logo" class="absolute">
      <img src="../assets/svg/Sakura.svg" alt="Logo" class="absolute">
      <img src="../assets/svg/Eda.svg" alt="Logo" class="absolute">
    </div>
  </div>
</template>

<style>
/* 桜を表示するコンテナのスタイル */
.cherry-blossom-container {
  position: relative;
  height: 100vh; /* コンテナの高さ */
  width: 100%; /* コンテナの横幅 */
  overflow: hidden; /* コンテナからはみ出した要素を隠す */
}

/* 桜の花びらのスタイル */
.petal {
  position: absolute;
  background-color: #ffc0cb; /* 花びらの色 */
  border-radius: 150% 0 150% 0;
  animation: animate-petal 10s linear;
}

.petal::after {
  content: "";
  position: absolute;
  top: -14%;
  left: -10%;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #ffc0cb;
  border-radius: 150% 0 150% 0;
  transform: rotate(15deg);
}

/* 花びらが降るアニメーション */
@keyframes animate-petal {
  0% {
    top: 0;
    opacity: 0;
    transform: rotate(0deg);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: 100vh;
    transform: rotate(3000deg);
  }
}

.fadeIn{
animation-name:fadeInAnime;
animation-duration:6s;
animation-fill-mode:forwards;
opacity:0;
}

@keyframes fadeInAnime{
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>
