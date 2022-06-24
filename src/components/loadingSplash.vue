<template>
  <div class="fixed flex top-0 z-50 right-0 w-full h-screen bg-purple-600">
    <div class="m-auto">
      <div class="flip-to-square m-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="text-center text-white popins-font">Please Wait</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
@-webkit-keyframes flip-to-square {
  0% {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }
  50%,
  75% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
}
@keyframes flip-to-square {
  0% {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }
  50%,
  75% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
}

.flip-to-square {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 60px;
  width: 60px;
}
.flip-to-square div {
  -webkit-animation: flip-to-square 1.5s calc(var(--delay) * 1s) infinite backwards;
  animation: flip-to-square 1.5s calc(var(--delay) * 1s) infinite backwards;
  background-color: white;
}
.flip-to-square div:nth-child(1) {
  --delay: 0.1;
}
.flip-to-square div:nth-child(2) {
  --delay: 0.2;
}
.flip-to-square div:nth-child(3) {
  --delay: 0.3;
}
.flip-to-square div:nth-child(4) {
  --delay: 0.4;
}
.flip-to-square div:nth-child(5) {
  --delay: 0.5;
}
.flip-to-square div:nth-child(6) {
  --delay: 0.6;
}
.flip-to-square div:nth-child(7) {
  --delay: 0.7;
}
.flip-to-square div:nth-child(8) {
  --delay: 0.8;
}
.flip-to-square div:nth-child(9) {
  --delay: 0.9;
}
</style>
