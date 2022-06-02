<template>
  <div
    class="border-t-2 sticky top-[100vh] w-auto border-gray-200 dark:border-pink-500 dark:bg-gray-800"
  >
    <div class="p-4 flex flex-row">
      <div class="basis-1/3">
        <a
          class="ml-2 dark:text-pink-600"
          href="http://linkedin.com/in/serhadbahadirtekkol"
        >
          <i class="fa-brands fa-linkedin text-lg"></i
        ></a>
        <a class="ml-2 dark:text-pink-600" href="http://twitter.com/serhadtekkol">
          <i class="fa-brands fa-twitter-square text-lg"></i
        ></a>
        <a class="ml-2 dark:text-pink-600" href="http://instagram.com/serhadtekkol">
          <i class="fa-brands fa-instagram-square text-lg"></i
        ></a>
      </div>
      <div
        class="basis-1/3 text-gray-600 text-sm text-center antialiased dark:text-pink-600"
      >
        {{ year }} ©
      </div>
      <div class="basis-1/3 text-right text-sm hover:text-purple-400 dark:text-pink-600">
        <router-link to="/messageme">
          <i class="fas fa-message-arrow-up-right"></i> Message Me!
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: "serhad",
    };
  },

  created() {
    const d = new Date();
    this.year = d.getFullYear();
  },
};
</script>
