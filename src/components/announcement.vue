<template>
  <!-- <div class="fixed bottom-0 bg-purple-500 w-full flex py-2"> -->
  <div class="bg-white w-full flex py-1 mb-2 border-gray-400/60 border-b shadow-lg">
    <div class="flex-1">
      <i class="far fa-bullhorn text-gray-400 px-4"></i>
    </div>

    <Vue3Marquee
      :pauseOnHover="true"
      :clone="true"
      :duration="speed"
      :gradient="true"
      :gradientColor="[255, 255, 255]"
      :gradientWidth="`10%`"
    >
      <div
        v-for="(word, index) in announce"
        v-html="splitter + word.description"
        :key="index"
        class="word-style text-gray-400 mx-4 text-sm"
        :class="{ word: true, odd: index % 2 === 0, even: index % 2 === 1 }"
      ></div>
    </Vue3Marquee>
  </div>
</template>
<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      splitter: "<i class='fa-solid fa-angles-right'></i> ",
      speed: 35,
      announce: [],
      binancedata: {
        description: "",
      },
    };
  },
  async created() {
    this.getannounce();
    this.getcoinprices();
    this.getip();
  },
  methods: {
    ...mapActions({
      getListDetail: "adminstore/getList",
    }),

    async getip() {
      let t = await fetch("https://ipapi.co/json/")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          return data;
        });

      console.log(t.city);
      var announcdata = {
        description: "Your Location : " + t.city,
      };

      this.announce.push(announcdata);
      this.getweather(t.latitude, t.longitude);
    },

    async getweather(lat, long) {
      let t = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          long +
          "&appid=fb354b053fdf21a3433d438b9dcc8e64&units=metric"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          return data;
        });
      var announcdata = {
        description: "<i class='far fa-cloud'></i> Temp : " + t.main.temp,
      };
      this.announce.push(announcdata);
      announcdata = {
        description: "<i class='far fa-wind'></i> Wind : " + t.wind.speed,
      };
      this.announce.push(announcdata);
      announcdata = {
        description:
          "<i class='far fa-droplet-degree'></i> Humidity : " + t.main.humidity,
      };
      this.announce.push(announcdata);
    },

    async getcoinprices() {
      var re = await fetch(
        'https://api.binance.com/api/v3/ticker/price?symbols=["BTCUSDT","ETHUSDT","USDTTRY"]'
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          return data;
        })
        .catch(function (error) {
          console.log("error: " + error);
        });

      for (let i in re) {
        var announcdata = {
          description:
            re[i].symbol +
            " : " +
            this.priceedit(re[i].price) +
            " <span class='text-xs text-white'>(" +
            new Date().toLocaleString() +
            ")</span>",
        };
        this.announce.push(announcdata);
      }
    },

    priceedit(price) {
      let t = price.split(".");
      let fd = t[0];
      let sd = t[1].substring(0, 3);

      return fd + "." + sd;
    },

    async getannounce() {
      try {
        let response = await this.getListDetail("announcement");
        for (let i in response) {
          this.announce.push(response[i]);
        }

        this.speed;
      } catch (error) {}
    },
  },
};
</script>
