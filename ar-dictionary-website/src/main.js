import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCd97fg_Xn50t7pvH-a0e1OayODVYAX77g",
    authDomain: "ar-dictionary-bce63.firebaseapp.com",
    projectId: "ar-dictionary-bce63",
    storageBucket: "ar-dictionary-bce63.appspot.com",
    messagingSenderId: "158250828075",
    appId: "1:158250828075:web:9f13c34de7f53be2ee856e",
    measurementId: "G-4T1SWGMCXB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

createApp(App).use(store).use(router).mount("#app");
