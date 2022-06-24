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
          class="md:inline border-b md:border-transparent border-gray-200 hover:bg-purple-500 hover:text-white rounded-lg py-1.5 px-2"
        >
          <i class="far fa-home mr-2 relative l-15"></i> Home
        </li>
      </router-link>

      <li
        class="md:inline dropdown text-gray-400 mr-6 border-b md:border-transparent sm:border-gray-200 sm:hover:bg-purple-500 sm:hover:text-white sm:rounded-lg py-1.5 px-2"
      >
        <div class="relative md:inline-block">
          <span class="dropbtn">
            <i class="far fa-home mr-2 relative l-15"></i> Categories</span
          >
          <ul
            class="dropdown-content min-w-max block md:hidden md:absolute md:bg-white md:rounded-lg md:shadow-lg px-3 py-3"
          >
            <li v-for="items in tags">
              <a
                :href="'/posts/' + tTu(items.tagname)"
                class="hover:bg-purple-500 rounded-lg text-gray-400 hover:text-white my-1.5 px-2 py-1.5 block"
                ><span class="sm:hidden inline-block mr-2"
                  ><i class="far fa-arrow-turn-down-right"></i> </span
                ><span><i :class="items.icon" class="mr-2"></i></span>
                {{ items.tagname }} Category</a
              >
            </li>
          </ul>
        </div>
      </li>

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
</template>
<script>
import { mapActions } from "vuex";

import { textToUrl } from "/src/func";
export default {
  data() {
    return {
      tags: [],
      isopen: false,
    };
  },
  async created() {
    this.gettags();
  },
  methods: {
    ...mapActions({
      filterTags: "adminstore/filterData",
    }),

    tTu(text) {
      return textToUrl(text);
    },

    async gettags() {
      this.tagList = [];
      const payload = {
        table: "tags",
        where: "showninmenu",
        value: "1",
      };

      try {
        let response = await this.filterTags({ payload });
        for (let key in response) {
          this.tags.push({ ...response[key], id: key });
        }
      } catch (error) {
        console.log(error);
      }
      this.inprogress = false;
    },
  },
};
</script>
<style scoped>
.dropbtn {
  border: none;
  cursor: pointer;
}

.dropdown-content {
  z-index: 999;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
