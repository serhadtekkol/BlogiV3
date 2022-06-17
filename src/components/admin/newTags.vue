<template>
  <div class="container mx-auto text-sm text-gray-600 pb-10 pt-10">
    <div class="p-6 bg-white rounded-md mb-2 shadow-md">
      <h3 class="text-lg px-1 py-3 font-sans font-semibold tracking-widest">New Tags</h3>

      <label class="">Tag Name</label><br />
      <input type="text" v-model="tag.tagname" class="inputs" />
      <label class="">Tag Description</label><br />
      <input type="text" v-model="tag.tagdesc" class="inputs" />
      <label class="">Tag Filter Query Name</label><br />
      <input type="text" v-model="tag.tagFilterQueryName" class="inputs" />

      <button @click="addnewtag" class="btn-scs">{{ !isnew ? "Update" : "Save" }}</button>
      <button v-if="!isnew" @click="isnew = true" class="btn-dng">Cancel</button>
      <div
        v-if="messageObject.show"
        :class="messageObject.error ? 'bg-red-500/80' : 'bg-green-600/50'"
        class="mt-2 p-3 rounded-md flex"
      >
        <div class="basis-10 text-center">
          <i
            :class="messageObject.error ? 'fa-exclamation-triangle' : 'fa-check'"
            class="fas fa-check text-white"
          ></i>
        </div>
        <div class="basis-full text-white border-l-2 px-3 border-l-gray-400">
          {{ messageObject.message }}
        </div>
      </div>
    </div>

    <div class="p-6 bg-white rounded-md mb-2 shadow-md text-gray-600 mt-8">
      <h3 class="text-lg px-1 py-3 font-sans font-semibold tracking-widest">Tag List</h3>

      <div
        v-if="inprogress"
        class="bg-slate-400 basis-1/6 w-full p-3 rounded-md m-2 text-center"
      >
        Loading <i class="fa-solid fa-spinner-third animate-spin"></i>
      </div>
      <div :class="inprogress ? 'blur-sm' : ''">
        <div
          v-for="(item, index) in tagList"
          class="border border-slate-300/80 hover:bg-slate-100 basis-1/6 w-full p-2 rounded-md m-2 justify-between flex"
        >
          <span> {{ item.tagname }} <span></span></span>
          <div>
            <button @click="edit(index)"><i class="far fa-edit"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isnew: true,
      inprogress: false,
      tagList: [],
      tag: {
        tagname: "",
        tagdesc: "",
        tagid: "",
        tagFilterQueryName: "",
      },
      messageObject: {
        show: false,
        error: false,
        message: "Tags successfully saved",
      },
    };
  },
  async created() {
    this.gettags();
  },
  methods: {
    ...mapActions({
      newtag: "adminstore/addnewtag",
      getList: "adminstore/getList",
      updatetag: "adminstore/updateTags",
    }),

    async edit(index) {
      this.tag.tagname = this.tagList[index].tagname;
      this.tag.tagdesc = this.tagList[index].tagdesc;
      this.tag.tagid = this.tagList[index].id;
      //todo hey
      this.tag.tagFilterQueryName = this.tagList[index].tagFilterQueryName;
      this.isnew = false;
    },

    async addnewtag() {
      this.inprogress = true;
      if (this.isnew) {
        try {
          await this.newtag({ payload: this.tag });
          this.messageObject.error = false;
          this.messageObject.show = true;
          this.messageObject.message = "Tags successfully saved";

          this.gettags();
        } catch (error) {
          this.messageObject.error = true;
          this.messageObject.show = true;
          this.messageObject.message = error;
        }
      } else {
        try {
          await this.updatetag({ payload: this.tag });
          this.messageObject.error = false;
          this.messageObject.show = true;
          this.messageObject.message = "Tags successfully updated";

          this.gettags();
        } catch (error) {
          this.messageObject.error = true;
          this.messageObject.show = true;
          this.messageObject.message = error;
        }
      }
    },

    async gettags() {
      this.tagList = [];
      this.inprogress = true;
      try {
        let response = await this.getList("tags");
        for (let key in response) {
          this.tagList.push({ ...response[key], id: key });
        }
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
      this.inprogress = false;
    },
  },
};
</script>
