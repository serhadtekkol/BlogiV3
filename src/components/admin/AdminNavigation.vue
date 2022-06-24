<template>
  <div
    id="navmenu"
    v-if="menushow"
    :class="menushow ? 'fixed w-50' : ' sm:relative hidden sm:inline-block'"
    class="text-sm min-h-screen max-h-screen z-max hidden sm:relative sm:inline-block"
  >
    <div class="absolute">
      <nav class="">
        <div class="fixed bg-sky-500 h-screen px-6">
          <ul class="py-3 text-gray-200 navitems text-center">
            <li @click="showonmobilemenu()" class="sm:hidden relative right-0">
              Close Menu <i class="far fa-times-circle font-bold"></i>
            </li>
            <li class="px-2 py-2 sm:mt-8 popins-font tracking-widest">Blogi Dashboard</li>

            <li>
              <router-link
                to="/master/dashboard"
                class="routebutton relative"
                active-class="activeroutebutton"
              >
                <i class="far fa-home"></i>
                <span class="pl-2 absolute left-8"> Dashboard</span>
              </router-link>
            </li>

            <li>
              <router-link
                to="/master/newpost"
                class="routebutton relative text-center"
                active-class="activeroutebutton"
              >
                <i class="far fa-file-plus pl-1 md:pl-0"></i>
                <span class="pl-2 absolute left-8"> New Post</span></router-link
              >
            </li>
            <li>
              <router-link
                to="/master/posts"
                class="routebutton relative"
                active-class="activeroutebutton"
              >
                <i class="far fa-list-alt"></i>
                <span class="pl-2 absolute left-8"> Posts</span></router-link
              >
            </li>

            <li>
              <router-link
                to="/master/newtag"
                class="routebutton relative"
                active-class="activeroutebutton"
              >
                <i class="far fa-badge-check"></i>
                <span class="pl-2 absolute left-8"> New Tag</span></router-link
              >
            </li>

            <li>
              <a
                href="https://serhadtekkol.web.app"
                target="_blank"
                class="routebutton relative"
              >
                <i class="far fa-globe-stand"></i>
                <span class="pl-2 absolute left-8"> Open Page Live </span></a
              >
            </li>
            <li>
              <a
                href="http://localhost:3000"
                target="_blank"
                class="routebutton relative"
              >
                <i class="far fa-arrows-to-circle"></i>
                <span class="pl-2 absolute left-8"> Open Page Local </span></a
              >
            </li>
            <li>
              <router-link
                to="/master/settings"
                class="routebutton relative"
                active-class="activeroutebutton"
              >
                <i class="far fa-gears text-center"></i>
                <span class="pl-2 absolute left-8"> Settings</span></router-link
              >
            </li>
          </ul>
          <div class="absolute inset-x-0 bottom-0 py-3">
            <div class="border border-transparent hover:border-white rounded-md">
              <button
                @click="logout"
                class="text-white px-3 py-1 text-sm w-full relative"
              >
                <i class="fas fa-power-off"></i>
                <span class="pl-2 left-8 hidden md:inline-block">{{ username }}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <button
    v-if="menubarshow"
    @click="showonmobilemenu()"
    class="fixed left-0 top-16 sm:hidden"
  >
    <span class="rounded-r-3xl pl-3 pr-4 py-3 bg-sky-500 shadow-lg"
      ><i class="far fa-list text-white"></i
    ></span>
  </button>
</template>

<script>
import { authstore } from "../../store/adminstore/auth";
import { mapActions } from "vuex";
import router from "../../router";
export default {
  data() {
    return {
      username: "authstore.state.user.email",
      menushow: true,
      menubarshow: true,
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
    showonmobilemenu() {
      var t = document.getElementById("navmenu");

      document.getElementById("navmenu").classList.toggle("hidden");
      this.menubarshow = !this.menubarshow;
    },
  },
  created() {
    this.username = localStorage.getItem("username");
  },
};
</script>

<style scoped>
.z-max {
  z-index: 99999999999999;
}

.w-50 {
  width: 12rem;
}
</style>
