import Vue from "nativescript-vue";
// import VueDevtools from 'nativescript-vue-devtools'
import {TNSFontIcon, fonticon} from 'nativescript-fonticon';
TNSFontIcon.debug = true;
TNSFontIcon.paths = {
    'fa': './assets/font-awesome.css'
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);


import Home from "./components/Home";
import Search from "./components/Search";

// Vue.options._base = Vue;
// Vue.use(VueDevtools);
// Vue.use(VueDevtools, { host: '192.168.1.64' });

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Search, Home,
    },
}).$start();
