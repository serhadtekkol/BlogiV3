<template>
  <div class="container mx-auto px-4">
    <div>
      <h3 class="uppercase mb-2 pt-2">Message Me</h3>
      <input
        class="border-gray-500 border w-full rounded-md px-3 py-1 mb-4 text-gray-600"
        placeholder="Subject"
        type="text"
      />
    </div>
    <textarea
      class="border-gray-500 border w-full h-44 rounded-md px-3 py-2"
      placeholder="Message"
    ></textarea>

    <div class="h-fit min-h-full flex justify-end">
      <div
        class="px-2 py-1.5 mt-3 mr-2 bg-gradient-to-r from-purple-500 to-red-600 opacity-80"
      >
        {{ firstn }} {{ operator }} {{ secondn }}
      </div>

      <input
        type="text"
        v-model="userval"
        class="text-sm px-2 py-1.5 mt-3 mr-2 rounded-sm border-gray-600 border"
        placeholder="Please enter solution"
      />

      <button
        @click="sendmessage()"
        class="text-right text-sm px-2 py-1.5 mt-3 rounded-sm hover:bg-gray-700 hover:text-white border-gray-600 border"
      >
        Send Message
      </button>
    </div>
  </div>

  <splash v-if="!loaded"></splash>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      subject: "",
      message: "",
      firstn: "",
      secondn: "",
      operatorselector: "",
      operator: "",
      sonuc: 0,
      userval: null,
    };
  },

  created() {
    this.loaded = false;
    this.createGen();
  },

  methods: {
    sendmessage() {
      if (this.operator == "+") {
        this.sonuc = this.total(this.firstn, this.secondn);
      } else {
        this.sonuc = this.minus(this.firstn, this.secondn);
      }

      if (this.sonuc == this.userval) {
        console.log(this.sonuc);
        console.log(this.userval);

        console.log("doğru");
      } else {
        console.log(this.sonuc);
        console.log(this.userval);

        console.log("yanlış");
        this.createGen();
      }
    },

    createGen() {
      this.firstn = Math.floor(Math.random() * 101);
      this.secondn = Math.floor(Math.random() * 101);
      this.operatorselector = Math.round(Math.random());
      if (this.operatorselector > 0) {
        this.operator = "+";
      } else {
        this.operator = "-";
      }
      this.loaded = true;
    },

    total(f, s) {
      return f + s;
    },

    minus(f, s) {
      return f - s;
    },
  },
};
</script>
