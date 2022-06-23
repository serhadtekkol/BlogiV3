<template>
  <div>
    <navApp></navApp>
    <annApp></annApp>
    <div class="mx-auto relative container sm:w-3/4 pt-2 px-6 sm:px-0">
      <div
        v-for="(row, index) in posts"
        class="bg-white rounded-md shadow-lg popins-font my-6 border border-gray-300/40 max-h-40"
      >
        <div class="flex max-h-40">
          <div
            :style="{ 'background-image': 'url(' + row.thumbnail + ')' }"
            class="w-32 sm:w-52 flex-none bg-center bg-gray-400 bg-cover rounded-l-md"
          ></div>
          <div class="px-6 py-6">
            <div class="">
              <div class="fw-600 tracking-wide text-gray-600 text-sm">
                {{ row.title }}
              </div>
              <span
                class="text-sm text-ellipsis sm:w-fit w-64 overflow-hidden sm:whitespace-normal whitespace-nowrap inline-block relative"
              >
                {{ row.summary }}
              </span>
            </div>
            <div class="flex my-2 select-none">
              <div
                class="text-xs border mb-2 mx-1.5 border-pink-300 w-fit px-1 py-1 rounded-md text-gray-500"
              >
                {{ row.tag }}
              </div>
              <div
                class="text-xs border mb-2 mx-1.5 border-pink-300 w-fit px-1 py-1 rounded-md text-gray-500"
              >
                unixTodate({{ row.posteddate }})
              </div>
            </div>
          </div>
        </div>
      </div>

      {{ this.$route.params.category }}
    </div>
  </div>
</template>

<script>
import NavigationVue from "../components/Navigation.vue";
import announcementVue from "../components/announcement.vue";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      posts: [],
      filter: this.$route.params.category,
    };
  },

  components: {
    navApp: NavigationVue,
    annApp: announcementVue,
  },
  async created() {
    this.getList();
  },
  methods: {
    ...mapActions({
      getPostList: "adminstore/getpostlist",
      getFilteredList: "adminstore/filterData",
    }),

    async getList() {
      console.log(this.filter);
      try {
        if (this.filter == "all") {
          const r = await this.getPostList();
          for (let key in r) {
            this.posts.push({ ...r[key], id: key });
          }

          console.log(this.posts);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
