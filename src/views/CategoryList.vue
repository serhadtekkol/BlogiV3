<template>
  <div>
    <navApp></navApp>
    <annApp></annApp>
    <div class="mx-auto relative container sm:w-3/4 pt-2 px-6 sm:px-0">
      <a :href="'../detail/' + row.id" v-for="(row, index) in posts">
        <div
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
                  v-html="uTd(row.posteddate)"
                  class="text-xs border mb-2 mx-1.5 border-pink-300 w-fit px-1 py-1 rounded-md text-gray-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <div v-if="posts.length == 0">
        <div class="flex justify-center items-center">
          <div
            class="text-center flex border border-purple-600 px-6 py-2 rounded-md text-purple-500 shadow-md"
          >
            <div class="mr-3">
              <i class="far fa-triangle-exclamation"></i>
            </div>

            <div>
              OOooowww Sorry :( <br />
              No articles have been published yet in this category.
            </div>
          </div>
        </div>
      </div>
      <!-- {{ this.$route.params.category }} -->
    </div>
  </div>
  <splash id="loadinganim" :class="loadinganim ? ' fixed flex ' : ' hideit'"></splash>
</template>

<script>
import NavigationVue from "../components/Navigation.vue";
import loadingSplashVue from "../components/loadingSplash.vue";
import announcementVue from "../components/announcement.vue";
import { unixToDate, urlConvert } from "/src/func.js";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      posts: [],
      filter: this.$route.params.id,
      loadinganim: true,
    };
  },

  components: {
    navApp: NavigationVue,
    annApp: announcementVue,
    splash: loadingSplashVue,
  },
  async created() {
    console.log(this.filter);
    this.getList();
  },
  watch: {
    loadinganim(val) {
      if (!this.loadinganim) {
        setTimeout(() => {
          document.getElementById("loadinganim").classList.add("hidden");
        }, 500);
      } else {
        document.getElementById("loadinganim").classList.remove("hidden");
      }
    },
  },
  methods: {
    ...mapActions({
      getPostList: "adminstore/getpostlist",
      getFilteredList: "adminstore/filterData",
    }),

    uTd(unix) {
      return unixToDate(unix);
    },

    async getList() {
      try {
        if (this.filter.replace("-", " ") == "all") {
          const r = await this.getPostList();
          for (let key in r) {
            this.posts.push({ ...r[key], id: key });
          }
        }
        {
          const payload = {
            table: "posts",
            where: "tag",
            value: urlConvert(this.filter),
          };
          const r = await this.getFilteredList({ payload });
          for (let k in r) {
            this.posts.push({ ...r[k], id: k });
          }
        }
        this.loadinganim = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
