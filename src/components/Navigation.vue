<template>
  <div
    class="fixed left-0 right-0 backdrop-blur-md dark:border-b-2 dark:border-pink-500 shadow-md top-0 z-50 border-b-2 border-gray-600 md:h-auto py-2 dark:bg-gray-800/30 dark:text-white"
  >
    <span class="px-2 py-2 mt-2">
      <div class="px-4 flex md:hidden">
        <button @click="isopen = !isopen"><i class="far fa-bars"></i></button>
        <div class="text-center w-full inline">Serhad Bahadır_</div>
      </div>

      <ul
        :class="isopen ? '' : 'hidden'"
        class="md:inline-block px-6 uppercase font-sans subpixel-antialiased md:px-3 md:py-3"
      >
        <router-link
          to="/"
          active-class="border-b-2 border-gradient-to-r from-pink-600 to-blue-600 py-2"
        >
          <li
            class="md:inline px-2 my-1 py-2 hover:bg-gradient-to-r from-pink-600 to-blue-600 hover:text-white mx-2 rounded-md"
          >
            <i class="far fa-home"></i> <span class="px-2">Home</span>
          </li>
        </router-link>

        <router-link to="/">
          <li
            class="md:inline px-2 my-1 py-2 hover:bg-gradient-to-r from-pink-600 to-blue-600 hover:text-white mx-2 rounded-md"
          >
            <i class="far fa-arrow-right"></i> <span class="px-2">C#</span>
          </li>
        </router-link>
        <router-link to="/">
          <li
            class="md:inline px-2 my-1 py-2 hover:bg-gradient-to-r from-pink-600 to-blue-600 hover:text-white mx-2 rounded-md"
          >
            <i class="far fa-arrow-right"></i> <span class="px-2">PCB</span>
          </li>
        </router-link>
        <router-link to="/">
          <li
            class="md:inline px-2 my-1 py-2 hover:bg-gradient-to-r from-pink-600 to-blue-600 hover:text-white mx-2 rounded-md"
          >
            <i class="far fa-arrow-right"></i> <span class="px-2">C#</span>
          </li>
        </router-link>

        <router-link
          to="/messageme"
          active-class="border-b-2 border-gradient-to-r from-pink-600 to-blue-600 py-2"
        >
          <li
            class="md:inline px-2 my-1 py-2 hover:bg-gradient-to-r from-pink-600 to-blue-600 hover:text-white mx-3 rounded-md"
          >
            <i class="far fa-envelope"></i> <span class="px-2">Message Me</span>
          </li>
        </router-link>
      </ul>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isopen: false,
    };
  },
};
</script>
