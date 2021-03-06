import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/faw/fontawesome/all.css'
import 'firebase/database'
import store from "./store"
import firebaseConfig from './firebaseconf.js'
import 'animate.css';
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from '@firebase/auth'


const appk = initializeApp(firebaseConfig);
const analytics = getAnalytics(appk);

// Get a reference to the database service
const database = getDatabase(appk);
const storage = getStorage(appk);

const auth = getAuth();


axios.defaults.baseURL = "https://blogi-448bc-default-rtdb.europe-west1.firebasedatabase.app/";
// Initialize Firebase

const app = createApp(App).use(Vue3Marquee).use(store).use(router).mount("#app");


// app.use(router)
// app.mount('#app');

onAuthStateChanged(auth, (user) => {

    if (!user) {
        // app.mount('#app');
    } else {
        console.log("pagerefreshed")


        // app.mount('#app');
        // something similar to this: this.$router.push({name: 'Dashboard'})
    }
})






// app.mount('#app');