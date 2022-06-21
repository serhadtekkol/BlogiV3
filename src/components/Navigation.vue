<template>
  <div class="py-4 border-b border-gray-500/40 px-4 sm:px-10 shadow-lg">
    <div class="px-2 flex text-purple-600 text-2xl md:hidden">
      <button @click="isopen = !isopen"><i class="far fa-bars"></i></button>
      <div class="text-center w-full text-purple-600 items-center text-base">
        <i class="fa-duotone fa-brackets-curly"></i
        ><span class="popins-font fw-400 antialiased ml-2">Blogi</span> <br />
      </div>
    </div>
    <ul
      :class="isopen ? '' : 'hidden'"
      class="nav md:inline-block px-6 capitalize font-sans subpixel-antialiased md:px-3 md:py-1"
    >
      <li class="md:inline hidden text-purple-600 text-2xl pr-12">
        <i class="fa-duotone fa-brackets-curly text-2xl"></i>
        <span>Blogi</span>
      </li>

      <router-link to="/" class="text-gray-400 mr-6">
        <li
          class="md:inline border-b md:border-transparent border-gray-200 py-1.5 px-2 hover:bg-purple-500 hover:text-white rounded-lg"
        >
          <i class="far fa-home mr-2 relative l-15"></i> Home
        </li>
      </router-link>

      <router-link to="/posts/all" class="text-gray-400 mr-6">
        <li
          class="md:inline border-b md:border-transparent border-gray-200 py-1.5 px-2 hover:bg-purple-500 hover:text-white rounded-lg"
        >
          <i class="far fa-border-all mr-2 relative l-15"></i> All Posts
        </li>
      </router-link>

      <router-link to="/posts/all" class="text-gray-400 mr-6">
        <li
          class="md:inline border-b md:border-transparent border-gray-200 py-1.5 px-2 hover:bg-purple-500 hover:text-white rounded-lg"
        >
          <i class="far fa-laptop-code mr-2"></i> C# Posts
        </li>
      </router-link>
      <router-link to="/posts/all" class="text-gray-400 mr-6">
        <li
          class="md:inline border-b md:border-transparent border-gray-200 py-1.5 px-2 hover:bg-purple-500 hover:text-white rounded-lg"
        >
          <i class="fa-brands fa-vuejs mr-2"></i> Vue Js
        </li>
      </router-link>
      <router-link to="/posts/all" class="text-gray-400 mr-6">
        <li
          class="md:inline border-b md:border-transparent border-gray-200 py-1.5 px-2 hover:bg-purple-500 hover:text-white rounded-lg"
        >
          <i class="far fa-diagram-next mr-2"></i> 3D Models
        </li>
      </router-link>
    </ul>
  </div>

  <!-- <div
    class="fixed left-0 right-0 bg-purple-500 text-white dark:border-b-2 dark:border-pink-500 shadow-md top-0 z-10 border-b-2 border-gray-600 md:h-16 py-1 dark:text-white"
  >
    <span class="px-2 mt-1">
      <div class="px-4 flex md:hidden">
        <button @click="isopen = !isopen"><i class="far fa-bars"></i></button>
        <div class="text-center w-full inline">Blogi V3</div>
      </div>

      <ul
        :class="isopen ? '' : 'hidden'"
        class="md:inline-block px-6 capitalize font-sans subpixel-antialiased md:px-3 md:py-1"
      >
        <router-link
          to="/"
          active-class="border-b-2 border-gradient-to-r from-pink-600 to-blue-600 py-2"
        >
          <li
            class="md:inline px-2 my-1 py-1 bg-white/30 hover:text-white mx-2 rounded-md"
          >
            <i class="far fa-home"></i> <span class="px-2">Home</span>
          </li>
        </router-link>

        <router-link to="/">
          <li
            class="md:inline px-2 my-1 py-1 hover:bg-gradient-to-r from-pink-600 to-blue-600 hover:text-white mx-2 rounded-md"
          >
            <i class="far fa-arrow-right"></i> <span class="px-2">C#</span>
          </li>
        </router-link>
        <router-link to="/">
          <li
            class="md:inline px-2 my-1 py-1 hover:bg-gradient-to-r from-pink-600 to-blue-600 hover:text-white mx-2 rounded-md"
          >
            <i class="far fa-arrow-right"></i> <span class="px-2">PCB</span>
          </li>
        </router-link>
        <router-link to="/">
          <li
            class="md:inline px-2 my-1 py-1 hover:bg-gradient-to-r from-pink-600 to-blue-600 hover:text-white mx-2 rounded-md"
          >
            <i class="far fa-arrow-right"></i> <span class="px-2">C#</span>
          </li>
        </router-link>

        <router-link
          to="/messageme"
          active-class="border-b-2 border-gradient-to-r from-pink-600 to-blue-600 py-2"
        >
          <li
            class="md:inline px-2 my-1 py-1 hover:bg-gradient-to-r from-pink-600 to-blue-600 hover:text-white mx-3 rounded-md"
          >
            <i class="far fa-envelope"></i> <span class="px-2">Message Me</span>
          </li>
        </router-link>
      </ul>
    </span>
  </div> -->
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
