<template>
  <div class="grid justify-items-center items-center h-screen bg-images">
    <div
      id="ttt"
      class="text-8xl w-2/4 text-center text-white popins-font backdrop-blur-sm px-6 py-6 border bg-white/10 rounded-md border-white/30"
    >
      {{ now }}
    </div>

    <div id="ccc" class="inline-flex popins-font">
      <div
        class="text-center backdrop-blur-lg border border-white/10 shadow-lg w-16 sm:w-32 bg-white/20 rounded-md shadow-black/20 py-6 mx-2"
      >
        <h2 class="text-4xl fw-600 text-white">{{ days }}</h2>
        <h3 class="text-white/50 sm:text-base text-xs uppercase fw-400">Days</h3>
      </div>

      <div
        class="text-center backdrop-blur-lg border border-white/10 shadow-lg w-16 sm:w-32 bg-white/20 rounded-md shadow-black/20 py-6 mx-2"
      >
        <h2 class="text-4xl text-white fw-600">{{ hours }}</h2>
        <h3 class="text-white/50 sm:text-base text-xs uppercase fw-400">Hours</h3>
      </div>

      <div
        class="text-center backdrop-blur-lg border border-white/10 shadow-lg w-16 sm:w-32 bg-white/20 rounded-md shadow-black/20 py-6 mx-2"
      >
        <h2 class="text-4xl text-white fw-600">{{ minutes }}</h2>
        <h3 class="text-white/50 sm:text-base text-xs uppercase fw-400">Minutes</h3>
      </div>

      <div
        class="text-center backdrop-blur-lg border border-white/10 shadow-lg w-16 sm:w-32 bg-white/20 rounded-md shadow-black/20 py-6 mx-2"
      >
        <h2 class="text-4xl text-white fw-600">{{ seconds }}</h2>
        <h3 class="text-white/50 sm:text-base text-xs uppercase fw-400">Seconds</h3>
      </div>
    </div>
  </div>
  <div
    class="w-60 bg-white/20 backdrop-blur-sm fixed left-0 top-0 shadow-md h-screen z-50 leftmenu px-6 py-6 border-r border-white/60"
  >
    <div
      class="mt-4 font-bold text-2xl text-white tracking-wider border-b p-3 border-b-white"
    >
      <i class="far fa-cogs"></i> Settings
    </div>

    <div class="mt-6">
      <button
        @click="shownow = false"
        class="border text-sm px-2 py-2 bg-white/20 text-white border-white/40 hover:bg-white/60 hover:text-gray-800 my-2"
      >
        Show Current Time
      </button>
      <button
        @click="shownow = true"
        class="border text-sm px-2 py-2 bg-white/20 text-white border-white/40 hover:bg-white/60 hover:text-gray-800 my-2"
      >
        Countdown
      </button>
    </div>
    <div
      class="mt-4 font-bold text-xl text-white tracking-wider border-b p-3 border-b-white"
    >
      <i class="far fa-clock-two"></i> CountDown
    </div>
    <div class="mt-4">
      <input
        type="date"
        v-model="hedeftarih"
        class="px-4 bg-white/20 border border-white/40 py-1.5 rounded-sm text-sm w-full"
      />
    </div>
    <div class="mt-4">
      <input
        type="time"
        v-model="hedefsaat"
        class="px-4 bg-white/20 border border-white/40 py-1.5 rounded-sm text-sm w-full"
      />
    </div>

    <button
      @click="calculateRemainTime"
      class="border text-sm px-2 py-2 bg-white/20 text-white border-white/40 hover:bg-white/60 hover:text-gray-800 mt-4"
    >
      Calculate Remain Time
    </button>
  </div>
  <a href="/" class="st fixed right-20 bottom-8 text-white/40 text-2xl cursor-pointer">
    <i class="far fa-home hover:text-white"></i>
  </a>
  <div
    @click="menushow"
    class="st fixed right-9 bottom-8 text-white/40 text-2xl cursor-pointer"
  >
    <i class="far fa-cog hover:animate-spin hover:text-white"></i>
  </div>

  <div id="yukle" class="fixed top-0 left-0 w-full h-screen bg-pink-500 z-50">
    <div class="grid justify-items-center items-center h-screen">
      <div class="text-center text-white">
        <i class="far fa-cog text-4xl animate-spin"></i><br />
        loading
      </div>
    </div>
  </div>
</template>
<script>
// import func from "/src/func";
import { gsap } from "gsap";

export default {
  data() {
    return {
      ismenushown: false,
      timearray: [1, 3, 5, 6, 12, 24, 48],
      buttonpos: [],
      now: null,
      remaintime: null,
      hedeftarih: "",
      hedefsaat: "",
      istimerenabled: true,
      firstload: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      shownow: false,
    };
  },
  mounted() {
    // this.getOffset();
    this.timernow();
    this.menushow();
    this.calcRemStorage();
    this.loadanim();
  },
  methods: {
    loadanim() {
      setTimeout(() => {
        gsap.fromTo(
          "#yukle",
          { opacity: 1 },
          { opacity: 0, display: "none", duration: 2 }
        );
      }, 1900);
    },

    timernow: function () {
      this.shownow = true;
      setInterval(() => {
        const a = new Date().toLocaleTimeString();
        this.now = a;
      }, 1000);
    },

    calculateRemainTime() {
      const date = new Date(this.hedeftarih + " " + this.hedefsaat).valueOf();

      if (this.firstload) {
        if (localStorage.getItem("selectedDateTime") > 0) {
          this.timerenabled();
        }
        this.firstload = false;
      } else {
        localStorage.removeItem("selectedDateTime");
        localStorage.setItem("selectedDateTime", date);
        this.firstload = false;

        var id = window.setInterval(function () {}, 0);
        while (id--) {
          window.clearInterval(id);
        }
        this.timernow();
        this.timerenabled();
      }
    },

    menushow() {
      if (this.ismenushown) {
        gsap.fromTo(
          ".leftmenu",
          { left: "-240px", opacity: 0 },
          { left: "0", opacity: 1, duration: 1, ease: "power4.out" }
        );
        this.ismenushown = false;
      } else {
        gsap.fromTo(
          ".leftmenu",
          { left: "0px", opacity: 1 },
          { left: "-240px", opacity: 0, duration: 1, ease: "power4.out" }
        );
        this.ismenushown = true;
      }
    },

    calcRemStorage() {
      this.firstload = true;
      this.calculateRemainTime();
    },

    timerenabled() {
      const finaldatetime = localStorage.getItem("selectedDateTime");
      if (finaldatetime > 0) {
        var _this = this;
        setInterval(function () {
          const nows = new Date();

          var diffInMilliSeconds = Math.abs(finaldatetime - nows) / 1000;

          const days = Math.floor(diffInMilliSeconds / 86400);
          diffInMilliSeconds -= days * 86400;

          const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
          diffInMilliSeconds -= hours * 3600;

          const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
          diffInMilliSeconds -= minutes * 60;

          const seconds = Math.floor(diffInMilliSeconds);

          _this.seconds = seconds;
          _this.minutes = minutes;
          _this.days = days;
          _this.hours = hours;

          console.log();
        }, 1000);
      }
    },
  },

  watch: {
    shownow() {
      if (this.shownow) {
        gsap.fromTo(
          "#ttt",
          { opacity: "1" },
          {
            opacity: "0",
            display: "none",
            duration: 1.2,
            ease: "power4.out",
            onComplete: () => {
              gsap.fromTo(
                "#ccc",
                { opacity: "0" },
                {
                  opacity: "1",
                  display: "inline-flex",
                  duration: 0.4,
                  ease: "power4.out",
                }
              );
            },
          }
        );
      } else {
        gsap.fromTo(
          "#ccc",
          { opacity: "1" },
          {
            opacity: "0",
            display: "none",
            duration: 1.2,
            ease: "power4.out",
            onComplete: () => {
              gsap.fromTo(
                "#ttt",
                { opacity: "0" },
                {
                  opacity: "1",
                  display: "block",
                  duration: 0.4,
                  ease: "power4.out",
                }
              );
            },
          }
        );
      }
    },
  },
};
</script>
<style scoped>
.sliderselector:after {
  content: "";
  border-bottom: 3px solid white;
  width: 30px;
  display: block;
  position: relative;
  /* margin: 0 auto; */
  bottom: -10px;
  animation: 1s slideactive;
  animation-fill-mode: forwards;
}

@keyframes slideactive {
  from {
    left: -250px;
  }
  to {
    left: -120px;
  }
}

.bg-images {
  background: #2980b9
    url("https://static.tumblr.com/03fbbc566b081016810402488936fbae/pqpk3dn/MRSmlzpj3/tumblr_static_bg3.png")
    repeat 0 0;
  -webkit-animation: 10s linear 0s normal none infinite animate;
  -moz-animation: 10s linear 0s normal none infinite animate;
  -ms-animation: 10s linear 0s normal none infinite animate;
  -o-animation: 10s linear 0s normal none infinite animate;
  animation: 10s linear 0s normal none infinite animate;
}

@-webkit-keyframes animate {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 500px 0;
  }
}

@-moz-keyframes animate {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 500px 0;
  }
}

@-ms-keyframes animate {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 500px 0;
  }
}

@-o-keyframes animate {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 500px 0;
  }
}

@keyframes animate {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 500px 0;
  }
}
/* box-shadow: 0 0 1px 0 gray inset, 0 0 1px 0 gray; */
</style>
