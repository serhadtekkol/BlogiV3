<template>
  <div class="container mx-auto w-full p-4">
    <div
      v-for="items in posts"
      class="px-8 py-6 border border-gray-300 rounded-md hover:shadow-lg mb-4 dark:border-gray-600"
    >
      <div class="flex">
        <div class="flex-none w-32">
          <img class="rounded-md shadow-md" :src="items.thumbnail" />
        </div>
        <div class="flex-auto pl-3">
          <div
            class="font-bold text-gray-700 font-serif tracking-widest text-lg dark:text-gray-300 roboto"
          >
            {{ items.title }}
          </div>
          <div class="roboto text-justify text-gray-600 dark:text-gray-300">
            {{ items.summary }}
          </div>
        </div>
      </div>
      <div class="h-fit min-h-full flex justify-end">
        <router-link
          :to="'/content/' + items.id"
          class="text-right text-sm px-2 py-1.5 mt-3 rounded-sm dark:hover:bg-pink-700 hover:bg-gray-700 hover:text-white dark:border-pink-700 dark:text-white border-gray-600 border"
          >Read More</router-link
        >
      </div>
    </div>
  </div>

  <splash v-if="!loaded"></splash>
</template>
<script>
import { mapActions, mapState } from "vuex";
import loadingSplashVue from "./loadingSplash.vue";
export default {
  data() {
    return {
      loaded: false,

      posts: [],
      query: {
        where: "",
        value: "",
        table: "",
      },
    };
  },

  components: {
    splash: loadingSplashVue,
  },
  created() {
    console.log("asdfasdasd");
    this.filterList();
  },

  methods: {
    ...mapActions({
      filter: "adminstore/filterData",
    }),

    async filterList() {
      this.loaded = false;
      try {
        (this.query.table = "posts"),
          (this.query.where = "isdraft"),
          (this.query.value = false);

        const table = "posts";
        let response = await this.filter({ payload: this.query });

        for (let key in response) {
          this.posts.push({ ...response[key], id: key });
        }

        this.loaded = true;
      } catch (error) {
        console.log("errror" + error);
      }
    },
  },
};
</script>
