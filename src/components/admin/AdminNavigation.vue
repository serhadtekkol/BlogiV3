<template>
  <nav class="bg-sky-500 px-6 text-sm min-h-screen">
    <div class="relative min-h-screen">
      <ul class="py-3 text-gray-200 navitems text-center">
        <li class="px-2 py-2 popins-font tracking-widest hidden md:inline-block">
          Blogi Dashboard
        </li>

        <li>
          <router-link
            to="/master/dashboard"
            class="routebutton relative"
            active-class="activeroutebutton"
          >
            <i class="far fa-home md:text-base text-2xl"></i>
            <span class="pl-2 absolute hidden md:inline-block left-8"> Dashboard</span>
          </router-link>
        </li>

        <li>
          <router-link
            to="/master/newpost"
            class="routebutton relative text-center"
            active-class="activeroutebutton"
          >
            <i class="far fa-file-plus md:text-base pl-1 md:pl-0 text-2xl"></i>
            <span class="pl-2 absolute left-8 hidden md:inline-block">
              New Post</span
            ></router-link
          >
        </li>
        <li>
          <router-link
            to="/master/posts"
            class="routebutton relative"
            active-class="activeroutebutton"
          >
            <i class="far fa-list-alt md:text-base text-2xl"></i>
            <span class="pl-2 absolute left-8 hidden md:inline-block">
              Posts</span
            ></router-link
          >
        </li>
        <!-- <li>
          <router-link
            to="/master/editmenu"
            class="routebutton w-full"
            active-class="activeroutebutton"
          >
            <i class="far fa-list-alt"></i>
            <span class="pl-2"> Edit Menus</span></router-link
          >
        </li> -->
        <li>
          <router-link
            to="/master/newtag"
            class="routebutton relative"
            active-class="activeroutebutton"
          >
            <i class="far fa-badge-check md:text-base text-2xl"></i>
            <span class="pl-2 absolute left-8 hidden md:inline-block">
              New Tag</span
            ></router-link
          >
        </li>

        <li>
          <a
            href="https://serhadtekkol.web.app"
            target="_blank"
            class="routebutton relative"
          >
            <i class="far fa-square-arrow-up-right md:text-base text-2xl"></i>
            <span class="pl-2 absolute left-8 hidden md:inline-block">
              Open Page
            </span></a
          >
        </li>
        <li>
          <router-link
            to="/master/settings"
            class="routebutton relative"
            active-class="activeroutebutton"
          >
            <i class="far fa-gears md:text-base text-center text-2xl"></i>
            <span class="pl-2 absolute left-8 hidden md:inline-block">
              Settings</span
            ></router-link
          >
        </li>
      </ul>
      <div class="absolute inset-x-0 bottom-0 py-3">
        <div class="border border-transparent hover:border-white rounded-md">
          <button @click="logout" class="text-white px-3 py-1 text-sm w-full relative">
            <i class="fas fa-power-off"></i>
            <span class="pl-2 left-8 hidden md:inline-block">{{ username }}</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
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
