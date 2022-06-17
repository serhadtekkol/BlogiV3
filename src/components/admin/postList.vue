<template>
  <div class="container mx-auto text-sm pb-10 pt-10">
    <div class="p-6 bg-white shadow-md rounded-md">
      <h3 class="text-lg px-1 py-3 font-sans font-semibold tracking-widest">Posts</h3>

      <div
        v-for="(row, index) in posts"
        :class="row.isdraft == true ? ' border-orange-500' : 'border-green-600'"
        class="bg-gray-100/30 mb-4 rounded-md px-2 py-4 flex shadow-md border-l-4 border-orange-500"
      >
        <div class="flex-auto text-sm pl-4">
          <div class="font-semibold text-purple-600 tracking-wide uppercase">
            {{ row.title }}
          </div>
          <div class="font-mono text-gray-600 text-xs capitalize">
            {{ row.summary }}
          </div>
          <div
            class="mt-2 text-xs bg-gradient-to-r from-pink-600 to-purple-600 w-fit px-2 py-1 rounded-lg text-white"
          >
            {{ row.tag }}
          </div>
        </div>

        <div class="flex-none w-32 text-center inline-block self-center align-middle">
          <button
            @click="changePostStatus(index, row.id, row.isdraft ? false : true)"
            class="h-8 w-8 px-1.5 py-1.5 rounded-md border border-gray-400 hover:bg-gray-300 hover:text-white text-gray-400 mx-1"
          >
            <i class="far fa-recycle mx-1"></i>
          </button>
          <span
            class="h-8 w-8 px-1.5 py-1.5 rounded-md border border-gray-400 hover:bg-gray-300 hover:text-white text-gray-400 mx-1"
          >
            <i class="far fa-trash mx-1"></i>
          </span>
          <span
            class="h-8 w-8 px-1.5 py-1.5 rounded-md border border-gray-400 hover:bg-gray-300 hover:text-white text-gray-400 mx-1"
          >
            <router-link :to="{ name: 'editpost', params: { id: row.id } }">
              <i class="far fa-pencil mx-1"></i>
            </router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div
    :class="isloaded ? 'hidden' : ''"
    class="grid place-items-center fixed top-0 left-0 w-screen h-screen bg-slate-600/40 backdrop-blur-sm mx-auto text-center z-100"
  >
    <span class="text-white text-xl">
      Please Wait While Components Loading <i class="far fa-spinner-third fa-spin"></i
    ></span>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      isloaded: false,
      post: {
        isdraft: null,
      },
      posts: [],
      query: {
        table: "",
        where: "",
        value: "",
      },
    };
  },

  async created() {
    this.getdetail();
    // this.filterList();
  },

  methods: {
    ...mapActions({
      getpostlist: "adminstore/getpostlist",
      updateAction: "adminstore/updateGeneral",
    }),
    ...mapState({
      message: "adminstore",
    }),

    async changePostStatus(index, id, status) {
      // console.log(index);
      // console.log(id);
      // console.log(status);
      this.posts[index].isdraft = status;
      // console.log(this.posts[index]);
      this.post.isdraft = status;
      await this.updateAction({
        table: "posts",
        id: id,
        payload: this.posts[index],
      });
    },

    async getdetail() {
      try {
        let response = await this.getpostlist();
        for (let key in response) {
          this.posts.push({ ...response[key], id: key });
        }
        this.isloaded = true;
      } catch (error) {
        console.log("errror" + error);
      }
    },

    //   async filterList() {
    //     try {
    //       (this.query.table = "posts"),
    //         (this.query.where = "tag"),
    //         (this.query.value = "Statistics");

    //       const table = "posts";
    //       let response = await this.filter({ payload: this.query });
    //       this.isloaded = false;
    //       // console.log(response);
    //     } catch (error) {
    //       console.log("errror" + error);
    //     }
    //   },
  },
};
</script>
