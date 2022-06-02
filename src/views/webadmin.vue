<template>
  <div class="bg-gray-700 min-h-screen">
    <adminNavApp></adminNavApp>
    <dashboard v-if="this.$route.params.compo == 'dashboard'"></dashboard>
    <newContent v-if="this.$route.params.compo == 'newpost'"></newContent>
    <postList v-if="this.$route.params.compo == 'posts'"></postList>

    <newTags v-if="this.$route.params.compo == 'newtag'"></newTags>
    <editMenu v-if="this.$route.params.compo == 'editmenu'"></editMenu>
    <editContent v-if="this.$route.params.id != null">hellow</editContent>
    <!-- {{ this.$route.params.compo }}
    {{ this.$route.params.id }} -->
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
export default {
  components: {
    adminNavApp: AdminNavigationVue,
    newContent: newContent,
    newTags: newTagsVue,
    postList: postList,
    dashboard: dashboardVue,
    editContent: editContentVue,
    editMenu: menu,
  },
};
</script>
