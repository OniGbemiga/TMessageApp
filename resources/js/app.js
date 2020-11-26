/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
import VueRouter from 'vue-router';


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.use(VueRouter);

const routes = [{
        path: '/',
        component: require('./components/App.vue').default,
        children: [{
            path: '/',
            name: 'Main',
            component: require('./components/Main.vue').default
        }]
    },
    {
        path: '/sent',
        component: require('./components/App.vue').default,
        children: [{
            path: '/sent',
            name: 'Sent',
            component: require('./components/Sent.vue').default
        }]
    },
    {
        path: '/pending',
        component: require('./components/App.vue').default,
        children: [{
            path: '/pending',
            name: 'Pending',
            component: require('./components/Pending.vue').default
        }]
    },
    {
        path: '/failed',
        component: require('./components/App.vue').default,
        children: [{
            path: '/failed',
            name: 'Failed',
            component: require('./components/Failed.vue').default
        }]
    },
];
// Vue.component('app', require('./components/App.vue').default);

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});