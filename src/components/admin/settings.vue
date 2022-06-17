<template>
  <div class="container mx-auto text-sm pb-10 pt-10">
    <div class="p-6 bg-white rounded-md mb-2 shadow-md">
      <h2 class="text-lg">Contacts Links</h2>
      <div class="flex-col flex">
        <div class="inline-block relative mx-2">
          <span class="absolute top-4 left-3"
            ><i class="fa-brands fa-twitter text-blue-600"></i></span
          ><input type="text" class="inputs-w-icon pl-8" v-model="social.twitter" />
        </div>

        <div class="inline-block relative mx-2">
          <span class="absolute top-4 left-3"
            ><i class="fa-brands fa-linkedin text-blue-600"></i></span
          ><input type="text" class="inputs-w-icon pl-8" v-model="social.linkedin" />
        </div>
        <div class="inline-block relative mx-2">
          <span class="absolute top-4 left-3"
            ><i class="fa-brands fa-github text-blue-600"></i></span
          ><input type="text" class="inputs-w-icon pl-8" v-model="social.github" />
        </div>
        <div class="inline-block relative mx-2">
          <span class="absolute top-4 left-3"
            ><i class="fa-brands fa-codepen text-blue-600"></i></span
          ><input type="text" class="inputs-w-icon pl-8" v-model="social.codepen" />
        </div>
        <div class="inline-block relative mx-2">
          <span class="absolute top-4 left-3"
            ><i class="far fa-envelope text-blue-600"></i></span
          ><input type="text" class="inputs-w-icon pl-8" v-model="social.mail" />
        </div>
      </div>
      <div class="justify-items-end grid mr-2">
        <button @click="post()" class="bg-green-500 rounded-md px-2 py-1.5 text-white">
          Update
        </button>
      </div>
      <div
        v-if="messageObject.show"
        :class="messageObject.error ? 'bg-red-500/80' : 'bg-green-600'"
        class="mt-2 p-3 rounded-md flex fixed bottom-10 right-4"
      >
        <div class="basis-10 text-center self-center">
          <i
            :class="messageObject.error ? 'fa-exclamation-triangle' : 'fa-check'"
            class="fas fa-check text-white"
          ></i>
        </div>

        <div class="flex-auto flex text-white border-l px-3 border-l-white">
          {{ messageObject.message }}
        </div>
        <div class="text-right">
          <button @click="messageObject.show = false">
            <i class="far fa-times text-white"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="p-6 bg-white rounded-md mb-2 mt-6 shadow-md">
      <h2 class="text-xl">Announcement</h2>

      <div class="flex-col flex">
        <div class="inline-block relative mx-2">
          <span class="absolute top-4 left-3"
            ><i class="far fa-bullhorn text-gray-600"></i></span
          ><input
            type="text"
            class="inputs-w-icon pl-8"
            v-model="announcement.description"
          />
        </div>
        <div class="justify-items-end grid mr-2">
          <div class="flex">
            <button
              @click="saveannouncement()"
              class="bg-green-500 rounded-md px-2 py-1.5 text-white mx-2"
            >
              {{ announcement.isnew ? "Create" : "Update" }}
            </button>
            <button
              v-if="!announcement.isnew"
              @click="announcement.isnew = true"
              class="bg-orange-500 rounded-md px-2 py-1.5 text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <div class="flex-col flex">
        <div
          v-for="(item, index) in announcements"
          class="border border-slate-300/80 hover:bg-slate-100 p-2 rounded-md m-2 justify-between flex"
        >
          <span>{{ item.description }}</span>

          <div>
            <button @click="editanno(index)" class="mr-2">
              <i class="far fa-edit"></i>
            </button>
            <button @click="deleteAct(index, item.id)" class="mr-2">
              <i class="far fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <app-alert
    @alert="deleteReturn($event)"
    v-if="messageboxShow.show"
    :messageboxShow="messageboxShow"
  ></app-alert>
</template>
<script>
import { mapActions } from "vuex";
import alertVue from "./alert.vue";
export default {
  components: {
    appAlert: alertVue,
  },
  data() {
    return {
      announcements: [],
      announcement: {
        id: "",
        isnew: true,
        description: "",
      },
      messageboxShow: {
        show: false,
        id: null,
        text: null,
      },
      messageObject: {
        show: false,
        error: false,
        message: "asdasdasdsas asdfgawrgaewrgaergaegrawerg",
      },
      social: {
        isnew: false,
        twitter: "",
        linkedin: "",
        github: "",
        mail: "",
        codepen: "",
      },
    };
  },

  watch: {
    messageObject(val) {
      setTimeout(() => {
        this.messageObject.show = false;
      }, 3000);
    },
  },

  created() {
    this.getsocial();
    this.getAnnouncement();
  },
  methods: {
    ...mapActions({
      setsocialaccounts: "adminstore/setSocial",
      getsocialaccounts: "adminstore/getSocial",
      setannouncement: "adminstore/setAnnouncement",
      getannouncement: "adminstore/getAnnouncement",
      deleteannouncement: "adminstore/deleteAnnouncement",
    }),

    editanno(index) {
      this.announcement.description = this.announcements[index].description;
      this.announcement.isnew = false;
    },

    deleteAct(index, id) {
      //   console.log(index);
      this.messageboxShow.show = true;

      this.messageboxShow.id = id;
      this.messageboxShow.text = this.announcements[index].description;
    },

    async deleteReturn(val) {
      this.messageboxShow.show = false;
      const payload = { id: val };
      try {
        await this.deleteannouncement({ payload: payload });
        this.announcements = [];
        this.getAnnouncement();
      } catch (error) {
        console.log(error);
      }
    },

    async post() {
      try {
        const message = await this.setsocialaccounts({ payload: this.social });
        this.messageObject = message;
      } catch (error) {
        console.log(error);
      }
    },
    async saveannouncement() {
      try {
        const message = await this.setannouncement({ payload: this.announcement });
        this.messageObject = message;
      } catch (error) {
        console.log(error);
      }
      this.getAnnouncement();
    },
    async getsocial() {
      try {
        const a = await this.getsocialaccounts();
        // console.log(a);
        this.social = a;
      } catch (error) {}
    },

    async getAnnouncement() {
      this.announcements = [];
      try {
        const response = await this.getannouncement();
        for (let key in response) {
          this.announcements.push({ ...response[key], id: key });
        }
      } catch (error) {}
    },
  },
};
</script>
