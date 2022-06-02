<template>
  <div
    class="bg-gray-500/30 backdrop-blur-md navtop border-b-2 px-10 border-b-pink-500 items-center container rounded-xl text-sm shadow-lg fixed top-0 right-0 left-0 mx-auto justify-between flex"
  >
    <div class="mt-1.5 mx-auto">
      <ul class="py-3 flex">
        <li class="inline px-2 text-gray-200">
          <router-link
            to="/master/dashboard"
            class="routebutton"
            active-class="activeroutebutton"
          >
            <i class="far fa-home"></i>
            <span class="hidden md:inline-block pl-2"> Dashboard</span>
          </router-link>
        </li>
        <li class="inline px-2 text-gray-200">
          <router-link
            to="/master/newpost"
            class="routebutton"
            active-class="activeroutebutton"
          >
            <i class="far fa-file-plus"></i>
            <span class="hidden md:inline-block pl-2"> New Post</span></router-link
          >
        </li>
        <li class="inline px-2 text-gray-200">
          <router-link
            to="/master/posts"
            class="routebutton"
            active-class="activeroutebutton"
          >
            <i class="far fa-list-alt"></i>
            <span class="hidden md:inline-block pl-2"> Posts</span></router-link
          >
        </li>
        <li class="inline px-2 text-gray-200">
          <router-link
            to="/master/editmenu"
            class="routebutton"
            active-class="activeroutebutton"
          >
            <i class="far fa-list-alt"></i>
            <span class="hidden md:inline-block pl-2"> Edit Menus</span></router-link
          >
        </li>
        <li class="inline px-2 text-gray-200">
          <router-link
            to="/master/newtag"
            class="routebutton"
            active-class="activeroutebutton"
          >
            <i class="far fa-badge-check"></i>
            <span class="hidden md:inline-block pl-2"> New Tag</span></router-link
          >
        </li>
      </ul>
    </div>
    <div>
      <div class="py-3">
        <button
          @click="logout"
          class="border border-gray-300 text-gray-300 px-3 py-1 text-sm rounded-md hover:bg-purple-600 hover:text-white"
        >
          <span class="hidden md:inline-block pl-2 mr-1">{{ username }}</span>
          <i class="fas fa-power-off"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { authstore } from "../../store/adminstore/auth";
import { mapActions } from "vuex";
import router from "../../router";
export default {
  data() {
    return {
      username: "authstore.state.user.email",
    };
  },
  methods: {
    ...mapActions({
      logoutFunc: "authstore/logout",
    }),
    async logout() {
      await this.logoutFunc();
      router.push("/login");
    },
  },
  created() {
    this.username = localStorage.getItem("username");
  },
};
</script>
