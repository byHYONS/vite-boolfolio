// iport istanza vue:
import { createApp } from 'vue'

//import router.js
import { router } from "./router";


// import style scss:
import './assets/scss/main.scss'

// import typography ubuntu:
import '@fontsource/ubuntu-condensed';

// import App Vue:
import App from './App.vue'

// append createApp in #app:
createApp(App).use(router).mount('#app')
