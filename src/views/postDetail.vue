<template>
  <!-- <div class="bg-gradient-to-t from-purple-700 to-blue-700 px-4"> -->
  <div class="mx-auto container sm:w-3/4 sm:border-x sm:border-gray-300">
    <div>menu component will be in here</div>

    <div class="min-h-screen popins-font">
      <div class="">
        <div class="">
          <img
            class="object-cover sm:h-52 h-72 w-full shadow-lg grayscale"
            :src="postdetail.thumbnail"
          />
        </div>
        <div class="py-6 relative w-3/5 -mt-14">
          <h2
            class="text-2xl px-4 py-4 uppercase text-white bg-purple-500 fw-400 tracking-tighter shadow-lg shadow-gray-400 rounded-r-md"
          >
            {{ postdetail.title }}
          </h2>
        </div>
        <div class="">
          <div class="w-full mt-3 bg-white rounded-lg px-10 py-6">
            <div
              v-html="postdetail.content"
              class="content mt-3 text-sm text-justify fw-300"
            ></div>

            <div class="w-full border-t border-gray-300 mt-4 flex py-4">
              <div
                class="border mx-2 shadow px-4 py-1.5 bg-gray-100 text-gray-600 rounded-md w-fit text-xs"
              >
                Author : {{ postdetail.author }}
              </div>
              <div
                class="border shadow mx-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-md w-fit text-xs"
              >
                Created : 19.06.2022
              </div>
              <div
                class="border shadow mx-2 px-4 py-1.5 bg-gray-100 text-gray-600 rounded-md w-fit text-xs"
              >
                Updated : 19.06.2022
              </div>
            </div>
          </div>
          <!-- <div class="basis-2/6 px-2 py-6">hellow</div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="fixed bottom-0 bg-purple-500 w-full flex py-2">
    <div class="flex-1"><i class="far fa-bullhorn text-white px-4"></i></div>
    <Vue3Marquee
      :pauseOnHover="true"
      :clone="true"
      :duration="10"
      :gradient="true"
      :gradientColor="[168, 85, 247]"
      :gradientWidth="`10%`"
    >
      <span
        v-for="(word, index) in helloArray"
        :key="index"
        class="word-style text-white mx-4"
        :class="{ word: true, odd: index % 2 === 0, even: index % 2 === 1 }"
      >
        <i class="far fa-circle-chevron-right"></i> {{ word }}
      </span>
    </Vue3Marquee>
  </div>

  <div
    id="loadinganim"
    :class="loadinganim ? ' fixed flex ' : ' hideit'"
    class="fixed flex top-0 right-0 w-full h-screen bg-purple-600"
  >
    <div class="m-auto">
      <div class="flip-to-square m-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="text-center text-white popins-font">Please Wait</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { cloneVNode } from "vue";

export default {
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      loadinganim: true,
      postdetail: {
        author: "",
        content: "",
        posteddate: "",
        thumbnail: "",
        title: "",
      },
      id: this.$route.params.id,

      helloArray: ["hello", "こんにちは", "bonjour", "안녕하세요"],
    };
  },

  async created() {
    this.getdetail();
  },

  watch: {
    loadinganim(val) {
      if (!this.loadinganim) {
        setTimeout(() => {
          document.getElementById("loadinganim").remove();
        }, 500);
      }
    },
  },

  methods: {
    ...mapActions({
      getPostDetail: "indexPageStore/getPostdetail",
    }),

    async getdetail() {
      try {
        let response = await this.getPostDetail(this.id);
        let c = this.postdetail;
        let j = this.id;

        c.author = response[j].author;
        c.title = response[j].title;
        c.content = response[j].content;
        c.thumbnail = response[j].thumbnail;
        this.loadinganim = false;
      } catch (error) {
        console.log("errror" + error);
      }
    },
  },
};
</script>
<style>
@keyframes hideanim {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    display: none;
  }
}

.hideit {
  animation: hideanim 1s normal forwards;
  animation-iteration-count: 1;
}

@-webkit-keyframes flip-to-square {
  0% {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }
  50%,
  75% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
}
@keyframes flip-to-square {
  0% {
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }
  50%,
  75% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
}

.flip-to-square {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 60px;
  width: 60px;
}
.flip-to-square div {
  -webkit-animation: flip-to-square 1.5s calc(var(--delay) * 1s) infinite backwards;
  animation: flip-to-square 1.5s calc(var(--delay) * 1s) infinite backwards;
  background-color: white;
}
.flip-to-square div:nth-child(1) {
  --delay: 0.1;
}
.flip-to-square div:nth-child(2) {
  --delay: 0.2;
}
.flip-to-square div:nth-child(3) {
  --delay: 0.3;
}
.flip-to-square div:nth-child(4) {
  --delay: 0.4;
}
.flip-to-square div:nth-child(5) {
  --delay: 0.5;
}
.flip-to-square div:nth-child(6) {
  --delay: 0.6;
}
.flip-to-square div:nth-child(7) {
  --delay: 0.7;
}
.flip-to-square div:nth-child(8) {
  --delay: 0.8;
}
.flip-to-square div:nth-child(9) {
  --delay: 0.9;
}
</style>
