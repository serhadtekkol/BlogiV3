<template>
  <div class="h-screen fixed top-0 w-screen bg-slate-400/30 backdrop-blur-sm z-most-top">
    <div class="flex justify-center items-center h-screen">
      <div class="ring">
        Wait<br />
        Nau Nau
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.z-most-top {
  z-index: 999999999999;
}
.ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: transparent;
  /* border: 3px solid #3c3c3c; */
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-family: sans-serif;
  font-size: 20px;
  color: #ff00dd;
  letter-spacing: 4px;
  text-transform: uppercase;
  /* text-shadow: 0 0 10px #ff00b3; */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.ring:before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid #ff008c;
  border-right: 3px solid #ff00bf;
  border-radius: 50%;
  animation: animateC 2s linear infinite;
}
span {
  display: block;
  position: absolute;
  top: calc(50% - 2px);
  left: 50%;
  width: 50%;
  height: 4px;
  background: transparent;
  transform-origin: left;
  animation: animate 2s linear infinite;
}
span:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ff008c;
  top: -6px;
  right: -8px;
  box-shadow: 0 0 20px #ff008c;
}
@keyframes animateC {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
</style>
