import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';

import FrontPage from './pages/FrontPage.vue'
import ArticlePage from './pages/ArticlePage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: FrontPage },
  { path: '/article/:id', component: ArticlePage },
]

const router = new VueRouter({ routes })

var http = axios.create();

Vue.prototype.$http = http

var events = new Vue()
Vue.prototype.$events = events

new Vue({ router }).$mount('#app')
