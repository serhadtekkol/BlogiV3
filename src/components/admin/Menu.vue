<template>
  <div class="container mx-auto text-sm pb-10 pt-10">
    <div class="p-6 bg-gray-600 rounded-md">
      <h3 class="text-lg text-white px-1 py-3 font-sans font-semibold tracking-widest">
        New Menu
      </h3>

      <div>
        <div class="bg-gray-500 px-2 py-4 rounded-md">
          <div class="md:flex">
            <div class="md:inline-block md:basis-1/4 mx-2 mt-2">
              <label class="text-white">Menu</label>
              <input
                type="text"
                v-model="menu.menutitle"
                class="bg-white text-gray-700 rounded-sm outline-none px-3 py-1 w-full"
              />
            </div>
            <div class="mx-2 md:basis-1/4 md:inline-block mt-2">
              <label class="text-white">Order</label>
              <input
                type="number"
                v-model="menu.menuOrder"
                class="bg-white text-gray-700 rounded-sm outline-none px-3 py-1 w-full"
              />
            </div>
            <div class="mx-2 md:basis-1/4 md:inline-block mt-2">
              <label class="text-white">Select Category</label>
              <select
                v-model="selectedCategory"
                class="bg-white text-gray-700 rounded-sm outline-none px-3 py-1 w-full"
              >
                <option value="Other">Other</option>
                <option :value="items.tagFilterQueryName" v-for="items in tagList">
                  {{ items.tagFilterQueryName }}
                </option>
              </select>
            </div>

            <div
              v-if="selectedCategory == 'Other'"
              class="mx-2 md:basis-1/4 md:inline-block mt-2"
            >
              <label class="text-white">Link</label>
              <input
                type="text"
                v-model="menu.link"
                class="bg-white text-gray-700 rounded-sm outline-none px-3 py-1 w-full"
              />
            </div>
            <div class="mx-2 md:basis-1/4 md:inline-block mt-2">
              <label class="text-white">Icon</label>
              <input
                type="text"
                v-model="menu.icon"
                class="bg-white text-gray-700 rounded-sm outline-none px-3 py-1 w-full"
              />
            </div>
            <div class="mx-2 md:basis-1/4 md:inline-block mt-2">
              <label class="text-white">Is Active</label>
              <select
                v-model="menu.active"
                class="bg-white text-gray-700 rounded-sm outline-none px-3 py-1 w-full"
              >
                <option>true</option>
                <option>false</option>
              </select>
            </div>
          </div>
          <div class="px-2 py-4">
            <button
              @click="addnewitem"
              class="bg-green-600 text-white hover:bg-green-700 w-full px-2 py-1.5 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto text-sm pb-10 pt-10">
      <div class="p-6 bg-gray-600 rounded-md">
        <h3 class="text-lg text-white px-1 py-3 font-sans font-semibold tracking-widest">
          Menu List
        </h3>
        <button
          @click="edit(index)"
          :class="
            item.active ? 'border-l-4 border-green-500' : 'border-l-4 border-orange-500'
          "
          v-for="(item, index) in menulist"
          class="mb-2 rounded-md bg-slate-300 px-2 py-2 w-full"
        >
          <div class="w-full">
            <i :class="item.icon"></i> {{}}  {{ item.menutitle }}
            <span class="float-right">{{ item.menuOrder }}</span>
          </div>
        </button>
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isloaded: false,
      isother: true,
      selectedCategory: "Other",
      tagList: [],
      menulist: [],
      menu: {
        menutitle: "",
        order: "",
        link: "",
        active: "",
        icon: "",
      },
    };
  },
  async created() {
    this.getTags();
    this.getMenu();
  },

  methods: {
    ...mapActions({
      addNewMenuAction: "adminstore/addNewMenu",

      getdetail: "adminstore/getDetail",
      getList: "adminstore/getList",
    }),

    edit(index) {
      const a = this.tagList.length;

      for (let step = 0; step < a; step++) {
        if (this.tagList[step].tagFilterQueryName == this.menulist[index].link) {
          this.selectedCategory = this.menulist[index].link;
          break;
        } else {
          this.selectedCategory = "Other";
        }
      }

      console.log(this.menulist[index].link);

      this.menu = this.menulist[index];
    },

    async addnewitem() {
      try {
        this.selectedCategory != "Other" ? (this.menu.link = this.selectedCategory) : "";

        await this.addNewMenuAction({ payload: this.menu });
        this.menulist = [];
        this.getMenu();
      } catch (error) {
        console.log(error);
      }
    },

    async getTags() {
      try {
        let response = await this.getList("tags");
        for (let key in response) {
          this.tagList.push({ ...response[key], id: key });
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getMenu() {
      try {
        let response = await this.getList("menu");
        for (let key in response) {
          this.menulist.push({ ...response[key], id: key });
        }
        this.menulist = this.menulist.sort(function (a, b) {
          return a.menuOrder - b.menuOrder;
        });
        this.isloaded = true;
      } catch (error) {}
    },
  },
};
</script>
