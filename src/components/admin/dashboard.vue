<template>
  <div class="container mx-auto text-sm pb-10 pt-10">
    <div class="p-6 bg-gray-600 rounded-md">
      <h3 class="text-lg text-white px-1 py-3 font-sans font-semibold tracking-widest">
        Hi! {{ username }}
      </h3>

      <div class="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <div class="">
          <div class="bg-gray-700 shadow-md rounded-lg p-4 border border-gray-500">
            <div class="flex justify-between">
              <div class="bg-pink-600 p-3 rounded-lg text-center w-16 h-16">
                <i class="far fa-file-plus text-4xl text-gray-300"></i>
              </div>
              <div>
                <span class="text-5xl flex text-gray-300">17</span
                ><span class="flex-auto text-gray-500">Total Post</span>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="bg-gray-700 shadow-md rounded-lg p-4 border border-gray-500">
            <div class="flex justify-between">
              <div class="bg-lime-600 p-3 rounded-lg text-center w-16 h-16">
                <i class="far fa-book-blank text-4xl text-gray-300"></i>
              </div>
              <div class="text-center">
                <span class="text-5xl flex text-gray-300 w-full">17</span
                ><span class="flex-auto text-gray-500 w-full">Drafts</span>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="bg-gray-700 shadow-md rounded-lg p-4 border border-gray-500">
            <div class="flex justify-between">
              <div class="bg-cyan-500 p-3 rounded-lg text-center w-16 h-16">
                <i class="far fa-badge-check text-4xl text-gray-300"></i>
              </div>
              <div class="text-center">
                <span class="text-5xl flex text-gray-300 w-full">6</span
                ><span class="flex-auto text-gray-500 w-full">Tags</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
};
</script>
