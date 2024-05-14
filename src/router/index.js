import { createRouter, createWebHistory } from 'vue-router';
import login from '../pages/login/App.vue';
import homepage from '../pages/homepage/App.vue';
import productchange from '../pages/productchange/App.vue';
import productadd from '../pages/productadd/App.vue';

const routes = [
    { path: '/', component: login, name: 'Login' },
    { path: '/homepage', component: homepage, name: 'HomePage',props: true},
    {
        path: '/productchange',
        name: 'ProductChange',
        component: productchange,
        props: true
    },
    {
        path: '/productadd',
        name: 'ProductAdd',
        component: productadd,
        props: true
    
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
