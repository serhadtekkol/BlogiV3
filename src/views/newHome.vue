<template>
  <div class="fixed top-0 z-50">
    <div class="text-right">
      <ul class="pt-4 bg-white/0 w-full pb-4">
        <li class="inline-block mx-4 px-1 py-1.5 border-b-2 border-slate-600">
          c# Posts
        </li>
        <li class="inline-block mx-4 px-1 py-1.5 border-b-2 border-slate-600">Vue.JS</li>
        <li class="inline-block mx-4 px-1 py-1.5 border-b-2 border-pink-600">
          3d Models
        </li>
        <li class="inline-block mx-4 px-1 py-1.5 border-b-2 border-slate-600">
          Technology
        </li>
      </ul>
    </div>
  </div>

  <div class="snap-y snap-mandatory h-screen overflow-scroll soh">
    <!-- <div class="overflow-scroll soh"> -->
    <div class="h-screen bg-white snap-center">
      <div class="grid place-items-center h-screen">
        <span
          class="text-6xl raleway-font font-light md:w-3/5 w-10/12 text-li text-gray-700 text-center"
          ><span class="text-6xl raleway-font font-light w-3/5 text-gray-800">
            Hi!, I'm
          </span>
          <span class="text-6xl raleway-font font-light w-3/5 namespan">Serhad</span
          ><br /><span class="md:text-2xl text-lg -mt-10 pr-2">Statistician |</span>
          <span class="md:text-2xl text-lg -mt-10 pr-2">Engineer |</span
          ><span class="md:text-2xl text-lg -mt-10">Software Developer</span>
        </span>
      </div>
    </div>

    <div class="h-screen bg-gray-800 snap-start">
      <div
        class="text-white font-light raleway-font text-4xl md:text-6xl w-full px-10 container relative top-20"
      >
        >_ C# Projects
      </div>

      <div class="grid place-items-center h-screen w-5/6">
        <div class="px-6">
          <div class="text-pink-600 text-bold">
            using <span class="text-white"> System;</span>
          </div>

          <div class="text-pink-600 mt-1">
            class <span class="text-white">cSharpProjects {</span>
          </div>

          <span class="text-green-600">///// all project down</span>
          <br />
          <button
            class="text-left mt-4 w-4/6 hover:border-2 rounded-md hover:border-pink-600 border-2 border-transparent"
          >
            <span class="text-pink-600">public static void</span>
            <span class="text-white"> sessionUsage ( ){</span>
            <br />
            <span class="text-green-600">*/</span><br />
            <span class="text-green-600"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eligendi
              Incidunt, quidem?</span
            ><br />
            <span class="text-green-600">/*</span><br />
            <span class="text-yellow-500">return true; </span><br />
            <span class="text-white">}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="h-screen bg-pink-700 snap-start">
      <div class="grid place-items-center h-screen">
        <div class="md:flex w-4/5 items-center">
          <div class="container w-full md:w-1/3 md:border-r-2 md:border-white">
            <span class="text-white poppins-font text-4xl md:text-6xl font-semibold">
              3D Models</span
            >
            <p class="uppercase mt-4 tracking-widest text-pink-300">
              I will share my 3D Models. <br />
              I usually design on rhinosceros
            </p>
          </div>
          <div class="px-10 container mt-4 md:mt-0 md:w-2/3">
            <div>
              <button
                class="border-white border px-2 py-2 mb-2 poppins-font text-white rounded-md justify-between flex w-full"
              >
                <span> Cartoons</span><span><i class="far fa-right"></i></span>
              </button>

              <div
                class="border-white border px-2 py-2 poppins-font text-white rounded-sm"
              >
                Cartoons
              </div>
              <div
                class="border-white border px-2 py-2 poppins-font text-white rounded-sm"
              >
                Cartoons
              </div>
              <div
                class="border-white border px-2 py-2 poppins-font text-white rounded-sm"
              >
                Cartoons
              </div>
              <div
                class="border-white border px-2 py-2 poppins-font text-white rounded-sm"
              >
                Cartoons
              </div>
              <div
                class="border-white border px-2 py-2 poppins-font text-white rounded-sm"
              >
                Cartoons
              </div>
              <div
                class="border-white border px-2 py-2 poppins-font text-white rounded-sm"
              >
                Cartoons
              </div>
              <div
                class="border-white border px-2 py-2 poppins-font text-white rounded-sm"
              >
                Cartoons
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.clear();
    console.log("Created with " + "%c❤" + "%c by Serhad", "color:red;", "color:black;");
    console.log("linkedin: serhadbahadirtekkol");
    console.log("twitter: serhadtekkol");
  },
};
</script>

<style scoped>
.soh {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}

.soh::-webkit-scrollbar {
  display: none;
}

.namespan {
  color: gray;
  transition: color 2s;
}

.namespan:hover {
  color: red;
}
</style>
