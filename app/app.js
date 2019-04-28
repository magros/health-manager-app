import Vue from 'nativescript-vue'
// import VueDevtools from 'nativescript-vue-devtools'
import {TNSFontIcon, fonticon} from 'nativescript-fonticon'
TNSFontIcon.debug = true
TNSFontIcon.paths = {
    'fa': './assets/font-awesome.css'
}
TNSFontIcon.loadCss()
Vue.filter('fonticon', fonticon)

import Home from './components/Home'
import Search from './components/search/Search'
import SideDrawer from './components/shared/SideDrawer'
import DrawerContent from './components/shared/drawer/DrawerContent'
import Results from './components/Results'

import routes from './router'
import store from './store'

// Vue.options._base = Vue;
// Vue.use(VueDevtools);
// Vue.use(VueDevtools, { host: '192.168.1.64' });
Vue.registerElement('FilterSelect', () => require('nativescript-filter-select').FilterSelect)
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)
Vue.registerElement('CheckBox', () => require('nativescript-checkbox').CheckBox, {
    prop: 'checked',
    event: 'checkedChange'
})

Vue.registerElement('MapView', () => require('nativescript-google-maps-sdk').MapView)

Vue.prototype.$routes = routes

new Vue({
    store,
    render(h) {
        return h(
            SideDrawer,
            [
                h(DrawerContent, {slot: 'drawerContent'}),
                h(routes.Home, {slot: 'mainContent'})
            ]
        )
    },
    // template: `
    //     <Frame>
    //         <Home />
    //     </Frame>`,

    components: {
        Search, Home, Results
    },
}).$start();
