<template>
  <div class="snap-y snap-mandatory h-screen overflow-scroll soh">
    <!-- <div class="overflow-scroll soh"> -->
    <div class="h-screen bg-white snap-center">
      <div class="grid place-items-center h-screen">
        <span
          class="text-6xl raleway-font font-light md:w-3/5 w-10/12 text-li text-gray-700 text-center"
          ><span class="text-6xl raleway-font font-light w-3/5 text-gray-800">
            Hi!, I'm
          </span>
          <span class="text-6xl raleway-font font-light w-3/5 namespan">Serhad</span
          ><br /><span class="md:text-2xl text-lg -mt-10 pr-2">Statistician |</span>
          <span class="md:text-2xl text-lg -mt-10 pr-2">Engineer |</span
          ><span class="md:text-2xl text-lg -mt-10">Software Developer</span>
        </span>
      </div>
      <div
        class="absolute right-10 bottom-6 animate-bounce text-white bg-gray-500/30 backdrop-blur-md text-sm px-2 rounded-md py-1.5"
      >
        Scroll Down
      </div>
    </div>

    <div
      class="h-screen bg-gray-800 snap-start bg-gradient-to-t from-gray-700 to-gray-900"
    >
      <div
        class="text-white font-light raleway-font text-4xl md:text-6xl w-full px-10 container pt-20"
      >
        >_ C# Projects
      </div>

      <div class="m-auto w-5/6 pt-6">
        <!-- <div class="grid place-items-center h-screen w-5/6"> -->
        <div
          class="px-6 w-full text-sm border border-gray-500 py-10 rounded-sm bg-gray-700"
        >
          <div class="text-pink-600 text-bold">
            using <span class="text-white"> System;</span>
          </div>

          <div class="text-pink-600 mt-1">
            class <span class="text-white">cSharpProjects {</span>
          </div>

          <span class="text-green-600">///// all project down</span>
          <br />
          <div
            class="hover:border-l-2 hover:border-pink-600 border-l-2 border-transparent px-4"
            v-for="items in csharp"
          >
            <router-link
              :to="{ path: '/detail/' + items.id }"
              class="text-left text-xs mt-4 w-4/6 px-4"
            >
              <div class="text-pink-600">
                public bool
                <span class="text-white italic">{{ camelCase(items.title) }} ( ){</span>
              </div>

              <div class="text-green-600 hidden md:block">*/</div>

              <div class="text-green-600 hidden md:block w-full italic">
                {{ items.summary }}
              </div>

              <div class="text-green-600 hidden md:block w-full">/*</div>
              <div class="text-yellow-500 hidden md:block">
                return <span class="text-white">true</span> ;
              </div>
              <div class="text-yellow-500 md:hidden">...</div>

              <div class="text-white">}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="h-screen bg-emerald-600 snap-start">
      <div class="grid place-items-center h-screen">
        <div class="container w-full text-center md:w-1/3">
          <span class="text-white poppins-font text-4xl md:text-6xl font-semibold">
            Vue.Js</span
          >
          <br />
          <div class="grid grid-cols-3 gap-4 place-items-center mt-10">
            <div>
              <i class="fa-brands fa-twitter text-white text-4xl"></i>
            </div>

            <div>
              <i class="fa-brands fa-linkedin text-white text-4xl"></i>
            </div>
            <div>
              <i class="fa-brands fa-github text-white text-4xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-screen bg-pink-700 snap-start">
      <div class="grid place-items-center h-screen">
        <div class="md:flex w-4/5 items-center">
          <div class="container w-full md:w-1/3 md:border-r-2 md:border-white">
            <span class="text-white poppins-font text-4xl md:text-6xl font-semibold">
              3D Models</span
            >
            <p class="uppercase mt-4 tracking-widest text-pink-300">
              I will share my 3D Models. <br />
              I usually design on rhinosceros
            </p>
          </div>
          <div class="px-10 container mt-4 md:mt-0 md:w-2/3">
            <div>
              <a
                :href="'detail/' + tdm.id"
                v-for="tdm in threeDmodels"
                class="border-white hover:bg-white hover:text-pink-600 border px-2 py-2 mb-2 poppins-font text-white rounded-md justify-between flex w-full"
              >
                <span>{{ tdm.title }}</span
                ><span><i class="far fa-right"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-screen bg-sky-700 snap-start bg-gradient-to-t from-purple-500">
      <div class="grid place-items-center h-screen">
        <div class="container w-full text-center md:w-1/3">
          <span class="text-white poppins-font text-4xl md:text-6xl font-semibold">
            Contacts</span
          >
          <br />
          <div class="grid grid-cols-3 gap-4 place-items-center mt-10">
            <div class="relative">
              <a class="sociallink px-4 py-8" href="http://www.twitter.com/serhadtekkol">
                <i class="fa-brands fa-twitter text-white text-4xl"></i>
              </a>
              <div
                class="hidden noti px-2 py-1.5 rounded-md mt-2 bg-white shadow-md shadow-gray-600 text-gray-700 text-sm"
              >
                Twitter
              </div>
            </div>
            <div class="relative">
              <a
                class="sociallink px-4 py-8"
                href="https://www.linkedin.com/in/serhadbahadirtekkol/"
              >
                <i class="fa-brands fa-linkedin text-white text-4xl"></i>
              </a>
              <div
                class="hidden noti px-2 py-1.5 rounded-md mt-2 bg-white shadow-md shadow-gray-600 text-gray-700 text-sm"
              >
                Linkedin
              </div>
            </div>

            <div class="relative">
              <a class="sociallink px-4 py-8" href="https://github.com/serhadtekkol">
                <i class="fa-brands fa-github text-white text-4xl"></i>
              </a>
              <div
                class="hidden noti px-2 py-1.5 rounded-md mt-2 bg-white shadow-md shadow-gray-600 text-gray-700 text-sm"
              >
                Github
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      csharp: [],
      threeDmodels: [],
    };
  },
  created() {
    console.clear();
    console.log("Created with " + "%c❤" + "%c by Serhad", "color:red;", "color:black;");
    console.log("linkedin: serhadbahadirtekkol");
    console.log("twitter: serhadtekkol");
  },
  async created() {
    this.getcsharp();
    this.get3dmodels();
  },

  methods: {
    ...mapActions({
      postList: "indexPageStore/getPostList",
    }),

    async getcsharp() {
      try {
        let response = await this.postList("C#");
        for (let key in response) {
          if (!response[key].isdraft) {
            this.csharp.push({ ...response[key], id: key });
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    async get3dmodels() {
      try {
        let response = await this.postList("3D Models");
        for (let key in response) {
          if (!response[key].isdraft) {
            console.log(response[key]);
            this.threeDmodels.push({ ...response[key], id: key });
          }
        }
        // console.log("-------s" + response[0].author);
      } catch (error) {
        console.log(error);
      }
    },

    camelCase(name) {
      let c = name.split(" ");
      let newName = "";
      for (let index = 0; index < c.length; index++) {
        if (index == 0) {
          newName = c[0].toLowerCase();
        } else {
          let newWord = c[index].toLowerCase();
          console.log(newWord);

          newName += newWord.charAt(0).toUpperCase() + newWord.slice(1);
        }
      }
      return newName;
    },
  },
};
</script>

<style scoped>
.sociallink:hover + .noti {
  position: absolute;
  width: 70px;
  display: block;
  animation: showBaloon cubic-bezier(0.05, 0.9, 1, 0.93) 0.8s;
}
.noti::before {
  content: "";
  position: absolute;
  left: 25px;

  top: -7px;
  border-style: solid;
  border-width: 0 8px 8px 8px;
  border-color: transparent transparent white transparent;
}

@keyframes showBaloon {
  0% {
    z-index: -2;
    top: 10px;
    opacity: 0;
  }

  100% {
    top: 38px;
    opacity: 1;
  }
}

.soh {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}

.soh::-webkit-scrollbar {
  display: none;
}

.namespan {
  color: gray;
  transition: color 2s;
}

.namespan:hover {
  color: red;
}
</style>
