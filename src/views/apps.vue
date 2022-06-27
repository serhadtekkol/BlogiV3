<template>
  <!-- <div>{{ this.$route.params.appname }}</div>
  serhad -->
  <appCountDown v-if="this.$route.params.appname == 'countdown'"></appCountDown>
</template>
<script>
import countdownVue from "../components/countdown.vue";

export default {
  components: {
    appCountDown: countdownVue,
  },
};
</script>
