import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from "axios"
import firebase from "firebase/app"

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-3SZJplpp4HndCcnZOkNyHbQ41XaYeMg",
  authDomain: "sng-website-6f1a3.firebaseapp.com",
  databaseURL: "https://sng-website-6f1a3.firebaseio.com",
  projectId: "sng-website-6f1a3",
  storageBucket: "sng-website-6f1a3.appspot.com",
  messagingSenderId: "1037967291150",
  appId: "1:1037967291150:web:23e4d6d6d75adc35dc1d5f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
