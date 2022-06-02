<template>
  <div
    class="grid place-items-center bg-cover h-screen bg-[url('https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&w=2520&h=1500&dpr=1')]"
  >
    <div class="backdrop-blur-sm bg-gray-500/25 p-8 rounded-lg shadow-lg">
      <div class="mt-3 mb-2">
        <h3 class="text-white font-semibold">Login</h3>
      </div>

      <div class="text-sm">
        <input
          type="e-mail"
          v-model="userCredidential.email"
          class="flex mb-2 bg-gray-100/30 focus:bg-gray-100/80 rounded-md px-2 py-1.5 text-gray-700"
        />
        <input
          type="password"
          v-model="userCredidential.password"
          class="flex mb-2 bg-gray-100/30 focus:bg-gray-100/80 rounded-md px-2 py-1.5 text-gray-700"
        />
        <button
          @click="signin"
          class="bg-gray-500 w-full px-2 py-1 rounded-md text-white hover:bg-gray-600"
        >
          Sign In
        </button>
      </div>

      <div
        v-if="showmessage"
        class="message bg-red-700/90 backdrop-blur-sm mt-2 shadow-md rounded-sm"
      >
        <div class="text-red-100 text-sm px-2 py-1.5 text-center">
          something went wrong!
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import router from "../../router";
export default {
  data() {
    return {
      userCredidential: {
        email: "serhadbahadir@gmail.com",
        password: "",
      },
      showmessage: false,
    };
  },
  methods: {
    ...mapActions({
      signfunc: "authstore/login",
      loginSes: "authstore/loginSession",
    }),
    async signin() {
      try {
        await this.signfunc({ payload: this.userCredidential });
        // console.log(this.userCredidential);

        // this.loginSes(a);
        // console.log(a);

        this.$router.push("/master/dashboard");
      } catch (error) {
        this.showmessage = true;
      }
    },
  },
};
</script>
