import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

Vue.use(VueRouter);

var router = new VueRouter();

router.map({
    '/about': {
        component: About
    },
    '/contact': {
        component: Contact
    }
})

var App = Vue.extend({});

router.start(App, 'body');