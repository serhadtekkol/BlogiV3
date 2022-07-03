<template>
  <div class="container mx-auto text-sm text-gray-600 pb-10 pt-10">
    <div class="p-6 bg-white shadow-md rounded-md">
      <div class="">
        <div class="">
          <h3 class="text-lg px-1 py-3 font-sans font-semibold tracking-widest">
            Edit Post
          </h3>
          <div class="md:flex">
            <div
              class="px-3 border basis-3/4 border-gray-200 rounded-md md:px-6 md:py-6 md:mr-4 py-6 my-4"
            >
              <label class="">Title</label><br />
              <input type="text" v-model="post.title" class="inputs" />
              <label class="">Thumbnail URL</label><br />
              <input type="text" v-model="post.thumbnail" class="inputs" />
              <ul class="text-gray-300 text-sm my-2">
                <li
                  v-for="item in tags"
                  @click="selectCategory(item.tagname)"
                  :class="post.tag == item.tagname ? 'tagselected' : 'tagsnotselected'"
                  class="inline px-2 py-0.5 mb-2 m-1 rounded-lg uppercase text-xs"
                >
                  {{ item.tagname }}
                </li>
              </ul>
              <label class="">Summary</label><br />

              <textarea type="text" v-model="post.summary" class="inputs" />
            </div>

            <div
              class="basis-1/4 px-3 border border-gray-200 rounded-md md:px-6 md:py-6 md:ml-4 py-6 my-4"
            >
              <label class="">File Or Image Upload</label><br />
              <Fileupload></Fileupload>
            </div>
          </div>

          <label class="text-white">Content</label><br />
          <textarea v-model="post.content" id="myTextarea"></textarea>
          <button @click="postContent" class="btn-scs">Post It</button>

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
      </div>
    </div>
  </div>

  <div
    :class="isloaded ? 'hidden' : ''"
    class="z-50 grid place-items-center fixed top-0 w-screen h-screen bg-slate-600/40 backdrop-blur-sm mx-auto text-center"
  >
    <span class="text-white text-xl">
      Please Wait While Components Loading <i class="far fa-spinner-third fa-spin"></i
    ></span>
  </div>
</template>
<script>
import "../../assets/tinymce/tinymce.min.js";
import "../../assets/tinymce/alljsfile";
import Fileupload from "./fileupload.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isloaded: false,
      messageObject: {
        show: false,
        error: false,
        message: "Tags successfully saved",
      },
      post: {
        title: "",
        thumbnail: "",
        author: "Serhad",
        summary: "",
        content: "",
        tag: "",
        postdate: "",
        updateddate: "",
        isdraft: true,
      },
      queryConst: {
        table: null,
        id: null,
      },

      content: "",
      selectedCategory: "",
      tags: [],
      tag: {
        tagname: "",
        tagdesc: "",
      },
    };
  },
  async created() {
    this.gettags();
  },
  mounted() {
    this.yasyasgleyy();
  },
  methods: {
    ...mapActions({
      newtag: "adminstore/addnewtag",
      getList: "adminstore/getList",
      getdetail: "adminstore/getDetail",
      createpost: "adminstore/createPost",
    }),
    async postContent() {
      this.isloaded = false;
      this.post.content = tinymce.get("myTextarea").getContent();

      try {
        await this.createpost({ payload: this.post });
        this.messageObject.error = false;
        this.messageObject.show = true;
        this.messageObject.message = "Post successfully saved";
        this.isloaded = true;
      } catch (error) {
        this.messageObject.error = true;
        this.messageObject.show = true;
        this.messageObject.message = error;
        this.isloaded = true;
        console.log(error);
      }
    },

    selectCategory(category) {
      this.post.tag = category;
    },

    async gettags() {
      this.tagList = [];
      this.inprogress = true;
      try {
        let response = await this.getList("tags");
        for (let key in response) {
          this.tags.push({ ...response[key], id: key });
        }
        this.isloaded = this.isloaded + 1;
        // console.log(response);
      } catch (error) {
        console.log(error);
      }
      this.inprogress = false;
    },
    yasyasgleyy() {
      tinymce.remove();
      tinymce.init({
        selector: "textarea#myTextarea",
        skin: false,
        content_css: "../../src/assets/tinymce/skins/content/default/content.min.css",
        plugins:
          "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
        imagetools_cors_hosts: ["picsum.photos"],
        menubar: "file edit view insert format tools table help",
        toolbar:
          "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
        toolbar_sticky: true,
        autosave_ask_before_unload: true,
        autosave_interval: "30s",
        autosave_prefix: "{path}{query}-{id}-",
        autosave_restore_when_empty: false,
        autosave_retention: "2m",
        image_advtab: true,
        /*content_css: '//www.tiny.cloud/css/codepen.min.css',*/

        importcss_append: true,

        templates: [],
        template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
        template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
        image_caption: true,
        quickbars_selection_toolbar:
          "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
        noneditable_noneditable_class: "mceNonEditable",
        toolbar_mode: "sliding",
        contextmenu: "link image imagetools table",
        height: 400,
      });
      console.log("yuklendi");
    },
  },
  components: { Fileupload },
};
</script>
