import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './components/About';
import Contact from './components/Contact';

Vue.use(VueRouter);

var router = new VueRouter();

router.map({
    '/foo': {
        component: About
    },
    '/bar': {
        component: Contact
    }
})

router.start(App, 'body');