<template>
  <!-- <div class="bg-gradient-to-t from-purple-700 to-blue-700 px-4"> -->
  <div class="mx-auto container sm:w-3/4 sm:border-x sm:border-gray-300">
    <div>menu</div>

    <div class="min-h-screen popins-font">
      <div class="">
        <div class="">
          <img
            class="object-cover sm:h-52 h-72 w-full shadow-lg grayscale"
            src="https://images.pexels.com/photos/3269269/pexels-photo-3269269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div class="py-6 relative w-3/5 -mt-14">
          <h2
            class="text-2xl px-4 py-4 uppercase text-white bg-purple-500 fw-400 tracking-tighter shadow-lg shadow-gray-400 rounded-r-md"
          >
            How to use session on asp.net
          </h2>
          <!-- 
            <div class="text-sm float-right">
              <div class="px-4 text-white">Posted: 16.06.2022 Updated: 17.06.2022</div>
            </div> -->
        </div>
        <div class="">
          <div class="w-full mt-3 bg-white rounded-lg px-10 py-6">
            <div class="content mt-3 text-sm text-justify fw-300">
              Our goal is to move (1,1) and make it at (0,1) which isn’t technically
              possible. So we will try to fake it. We previously said that our range is [0
              1] (or [0% 100%]) so let’s imagine the case when 0% is very close to 100%.
              If, for example, we want to animate top from 20px (0%) to 20.1px (100%) then
              we can say that both the initial and final states are equal. Hm, but our
              element will not move at all, right? Well, it will move a little because the
              Y value exceeds 20.1px (100%). But that’s not enough to give us perceptible
              movement:
            </div>

            <div class="w-full border-t border-gray-300 mt-4 flex py-4">
              <div
                class="border mx-2 shadow px-4 py-1.5 bg-gray-100 text-gray-600 rounded-md w-fit text-xs"
              >
                Author : Serhad
              </div>
              <div
                class="border shadow mx-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-md w-fit text-xs"
              >
                Created : 19.06.2022
              </div>
              <div
                class="border shadow mx-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-md w-fit text-xs"
              >
                Updated : 19.06.2022
              </div>
            </div>
          </div>
          <!-- <div class="basis-2/6 px-2 py-6">hellow</div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="fixed bottom-0 bg-purple-500 w-full flex py-2">
    <div class="flex-1"><i class="far fa-bullhorn text-white px-4"></i></div>
    <Vue3Marquee
      :pauseOnHover="true"
      :clone="true"
      :duration="10"
      :gradient="true"
      :gradientColor="[168, 85, 247]"
      :gradientWidth="`10%`"
    >
      <span
        v-for="(word, index) in helloArray"
        :key="index"
        class="word-style text-white mx-4"
        :class="{ word: true, odd: index % 2 === 0, even: index % 2 === 1 }"
      >
        <i class="far fa-circle-chevron-right"></i> {{ word }}
      </span>
    </Vue3Marquee>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
export default {
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      helloArray: ["hello", "こんにちは", "bonjour", "안녕하세요"],
    };
  },
};
</script>
