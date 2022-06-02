<template>
  <div class="h-screen bg-gray-500">
    <login></login>
  </div>
</template>
<script>
import loginVue from "../components/admin/login.vue";

export default {
  components: {
    login: loginVue,
  },
};
</script>
