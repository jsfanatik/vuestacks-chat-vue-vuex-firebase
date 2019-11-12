import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueChatScroll from 'vue-chat-scroll'
import firebase from "firebase";

Vue.use(VueChatScroll)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
