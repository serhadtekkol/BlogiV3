<template>
  <div>
    <navApp></navApp>
    <annApp></annApp>
    <div class="popins-font container mx-auto text-sm">
      <div
        v-if="posts.length > 0"
        class="bg-white rounded-lg px-12 py-12 shadow-2xl shadow-purple-200"
      >
        <!-- <div
          class="rounded-md align-baseline text-sm border-purple-700 text-purple-700 px-6 py-4 border bg-purple-200"
        >
          <span><i class="far fa-check-circle mr-4 text-xl"></i></span>
          All of c# projects and contents
        </div> -->

        <div
          v-for="(row, index) in posts"
          class="sm:flex border-b border-gray-200 py-8 justify-between my-12 text-center sm:text-left"
        >
          <div class="sm:flex-none sm:w-36 mx-4 px-2 grid justify-items-center">
            <img
              class="rounded-md max-h-36 w-5/6 object-cover justify-items-center"
              :src="row.thumbnail"
            />
          </div>
          <div class="sm:flex-1 py-2 px-6 sm:mt-0 mt-6">
            <div>
              <span class="fw-600 text-gray-700 capitalize text-base">{{
                row.title
              }}</span>
            </div>
            <div class="mt-2">
              <span class="text-gray-400">{{ row.summary }}</span>
            </div>
            <div class="mt-4">
              <span class="text-gray-800 fw-600 text-xs px-5 py-2 rounded-2xl bg-gray-200"
                ><i class="far fa-calendar-arrow-up mr-2"></i>
                <span v-html="uTd(row.posteddate)"> </span
              ></span>
            </div>
          </div>
          <div class="sm:flex-none mt-8 sm:w-32 text-center">
            <router-link
              :to="{ name: 'detailpost', params: { id: row.id } }"
              class="bg-white border-2 border-purple-700 text-purple-700 px-6 py-2 rounded-md hover:bg-purple-600 hover:text-white"
              >Read</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto relative container sm:w-3/4 pt-2 px-6 sm:px-0">
      <!-- <a :href="'../detail/' + row.id" v-for="(row, index) in posts">
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
      </a> -->
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
