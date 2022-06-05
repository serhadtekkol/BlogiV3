<template>
  <div
    class="z-50 top-0 left-0 fixed grid place-items-center w-screen h-screen backdrop-blur-sm bg-white/20"
  >
    <div
      class="bg-white border-2 border-pink-500 md:w-2/4 w-3/4 lg:w-1/4 rounded-md py-8 px-6 text-center shadow-xl shadow-gray-600 animate__animated animate__fadeInDown"
    >
      <div class="mb-2 font-bold text-gray-600">Are you Sure?</div>
      <div class="mb-3">
        Do you want to delete
        <span class="font-bold">'{{ messageboxShow.text }}'</span> ?
      </div>
      <div class="flex mt-5">
        <button
          @click="response(messageboxShow.id)"
          class="border-green-500 focus:bg-green-500 hover:bg-green-500 hover:text-white border px-2 py-1.5 rounded-md w-1/2 mx-3"
        >
          OK
        </button>
        <button
          @click="messageboxShow.show = false"
          class="border-red-500 active:bg-red-500 hover:bg-red-500 hover:text-white border px-2 py-1.5 rounded-md w-1/2 mx-3"
        >
          Noo
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    messageboxShow: {
      show: false,
      id: null,
      text: null,
    },
  },

  methods: {
    response(id) {
      this.$emit("alert", id);
    },
  },

  created() {},
};
</script>
