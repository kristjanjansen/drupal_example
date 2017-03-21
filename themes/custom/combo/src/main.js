import Vue from 'vue'

import axios from 'axios';

var http = axios.create();
Vue.prototype.$http = http

import VueRouter from 'vue-router'
import router from './router';

Vue.use(VueRouter)
new Vue({ router }).$mount('#app')
