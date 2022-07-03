<template>
  <navApp class="fixed w-full z-50 backdrop-blur-lg"></navApp>

  <div id="container" class="popins-font mx-auto text-sm">
    <div class="grid h-screen w-full place-items-center dark:bg-gray-800">
      <div class="flex sm:flex-row flex-col px-10 sm:mt-10 py-6">
        <div class="sm:flex-none sm:order-1 order-2 place-self-center">
          <p class="text-4xl fw-500 pb-4 dark:text-white">Hi, I'm Serhad</p>
          <span class="text-gray-600 dark:text-gray-200"
            >{ Engineer | Statistician | Software Developer }</span
          >
          <p class="mt-8 text-gray-600">
            <a class="mx-4" :href="social.github">
              <i class="fa-brands fa-github text-3xl"></i
            ></a>
            <a class="mx-4 hover:text-sky-600" :href="social.linkedin">
              <i class="fa-brands fa-linkedin text-3xl"></i
            ></a>
            <a class="mx-4 hover:text-sky-600" :href="social.twitter">
              <i class="fa-brands fa-twitter text-3xl"></i
            ></a>
            <a class="mx-4 hover:text-sky-600" :href="social.codepen">
              <i class="fa-brands fa-codepen text-3xl"></i
            ></a>
          </p>
        </div>
        <div
          class="sm:flex-none sm:order-2 order-1 place-self-center mx-auto mb-10 sm:mb-0"
        >
          <img
            class="userimg h-64 shadow-2xl"
            src="https://firebasestorage.googleapis.com/v0/b/blogi-448bc.appspot.com/o/archivegeneral%2F3c85cddb-4f5d-482a-8bfb-077caf02e9a7.jpg?alt=media&token=401e3b55-1f54-452e-9a08-16d9c7d3d686"
          />
        </div>
      </div>
    </div>
    <div class="bg-yellow-500 grid h-screen w-full place-items-center">
      <div class="container">
        <div class="sm:flex">
          <div class="sm:basis-1/3 self-center px-4 mb-10">
            <span class="text-4xl mt-16">Last Posts</span>
          </div>

          <div class="h-48 sm:basis-2/3 sm:border-l-2 sm:border-black px-6">
            <router-link
              v-for="post in posts"
              :to="{ name: 'detailpost', params: { id: post.id } }"
              class="px-4 py-3 mb-4 rounded-sm border border-black flex justify-between hover:bg-black hover:text-yellow-500"
            >
              <div class="text-base">{{ post.title }}</div>
              <div><i class="far fa-arrow-right-from-arc"></i></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import NavigationVue from "../components/Navigation.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  data() {
    return {
      active: 0,
      posts: [],
      carouselimages: [],
      social: {
        isnew: false,
        twitter: "",
        linkedin: "",
        github: "",
        codepen: "",
        mail: "",
      },
    };
  },

  mounted() {
    this.anim();
  },
  async created() {
    this.getposts();
    this.getsocial();
  },

  components: {
    navApp: NavigationVue,
  },

  methods: {
    ...mapActions({
      postList: "indexPageStore/selectedPostsInPage",
      getsocialaccounts: "adminstore/getSocial",
    }),

    anim() {},
    async getsocial() {
      try {
        const a = await this.getsocialaccounts();

        this.social = a;
      } catch (error) {}
    },
    async getposts() {
      try {
        let response = await this.postList();
        for (let key in response) {
          if (!response[key].isdraft) {
            this.posts.push({ ...response[key], id: key });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.userimg {
  -webkit-animation: transform 10s ease-in-out infinite both alternate,
    movement 20s ease-in-out infinite both;
  animation: transform 10s ease-in-out infinite both alternate,
    movement 20s ease-in-out infinite both;
}

@-webkit-keyframes transform {
  0%,
  100% {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  }
  14% {
    border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
  }
  28% {
    border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
  }
  42% {
    border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
  }
  56% {
    border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
  }
  70% {
    border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  }
  84% {
    border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
  }
}

@keyframes transform {
  0%,
  100% {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  }
  14% {
    border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
  }
  28% {
    border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
  }
  42% {
    border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
  }
  56% {
    border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
  }
  70% {
    border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  }
  84% {
    border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
  }
}

@-webkit-keyframes movement {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: translateY(20%) rotateY(10deg);
  }
}

@keyframes movement {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: translateY(20%) rotateY(10deg);
  }
}
</style>
