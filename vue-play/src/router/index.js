import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue'),
  },
  {
    path: '/otp',
    name: 'otp',
    component: () => import(/* webpackChunkName: "otp" */ '../views/OTP.vue'),
  },
  {
    path: '/css-secrets',
    name: 'cssSecrets',
    component: () => import(/* webpackChunkName: "otp" */ '../views/CssSecrets.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
