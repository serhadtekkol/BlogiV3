<template>
  <div class="w-screen min-h-screen font-sans text-gray-900 bg-gray-50 flex">
    <div v-if="menushow" :class="menushow ? '' : ''" class="md:w-60">
      <adminNavApp></adminNavApp>
    </div>

    <div class="flex-1 min-w-0">
      <div class="w-full shadow-md px-6 py-4 flex">
        <button @click="menushow = !menushow" class="">
          <i class="far fa-list-dots"></i>
        </button>
        <div>blogi</div>
      </div>

      <div class="px-4">
        <dashboard v-if="this.$route.params.compo == 'dashboard'"></dashboard>
        <newContent v-if="this.$route.params.compo == 'newpost'"></newContent>
        <postList v-if="this.$route.params.compo == 'posts'"></postList>

        <newTags v-if="this.$route.params.compo == 'newtag'"></newTags>
        <editMenu v-if="this.$route.params.compo == 'editmenu'"></editMenu>
        <settingsComponent
          v-if="this.$route.params.compo == 'settings'"
        ></settingsComponent>
        <editContent v-if="this.$route.params.id != null">hellow</editContent>
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavigationVue from "../components/admin/AdminNavigation.vue";
import newContent from "../components/admin/newContent.vue";
import newTagsVue from "../components/admin/newTags.vue";
import postList from "../components/admin/postList.vue";
import dashboardVue from "../components/admin/dashboard.vue";
import editContentVue from "../components/admin/editContent.vue";
import menu from "../components/admin/Menu.vue";
import settings from "../components/admin/settings.vue";
export default {
  components: {
    adminNavApp: AdminNavigationVue,
    newContent: newContent,
    newTags: newTagsVue,
    postList: postList,
    dashboard: dashboardVue,
    editContent: editContentVue,
    editMenu: menu,
    settingsComponent: settings,
  },

  data() {
    return {
      menushow: true,
    };
  },
  methods: {
    showmenu() {},
  },
};
</script>
