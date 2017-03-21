import Vue from 'vue'

import api from './api';
Vue.prototype.$api = api

import VueRouter from 'vue-router'
import router from './router';

Vue.use(VueRouter)
new Vue({ router }).$mount('#app')
