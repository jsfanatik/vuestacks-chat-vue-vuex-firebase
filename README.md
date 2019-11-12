# vuestacks-chat-vue-vuex-firebase

![alt text](https://raw.githubusercontent.com/jsfanatik/vuestacks-chat-mevn-vuex-mongoose/master/src/assets/vuestacks-chat.JPG)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Overview

The VueStacks Vuex Firebase chat demo utilizes Vuex, Firebase, and Vue-Router to post messages in a chatroom.

This demo utilizes Materialize CSS for general styling. See the CDN located in ```public/index.html```

See chat component in ```components/Chat.vue```

See login component in ```components/Home.vue```

See Vuex state management in ```/store/index.js```


### Setting up Firebase

1) Set up new project in Firebase with Database and Storage enabled
2) Implement the following Firebase SDK scripts in main.js:
```
const app = initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
});

export const db = firebase.firestore();
```
Enjoy the demo! Submit an issue if you see anything that could be improved!
