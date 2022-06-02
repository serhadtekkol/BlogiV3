import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/faw/fontawesome/all.css'
import 'firebase/database'
import store from "./store"
import firebaseConfig from './firebaseconf.js'

// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged } from '@firebase/auth'


const appk = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(appk);

const auth = getAuth();


axios.defaults.baseURL = "https://blogi-448bc-default-rtdb.europe-west1.firebasedatabase.app/";
// Initialize Firebase

const app = createApp(App).use(store).use(router).mount("#app");


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