<template>
  <div class="bg-white dark:bg-gray-700 w-full min-h-screen">
    <nav-app></nav-app>
    <div class="h-16"></div>
    <posts-app v-if="!this.$route.params.compo"></posts-app>
    <messageme-app v-if="this.$route.params.compo == 'messageme'"></messageme-app>

    <footer-app></footer-app>
  </div>
</template>
<script>
import Nav from "../components/Navigation.vue";
import Posts from "../components/PostList.vue";
import MessageMe from "../components/MessageMe.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    NavApp: Nav,
    PostsApp: Posts,
    footerApp: Footer,
    MessagemeApp: MessageMe,
  },
};
</script>
