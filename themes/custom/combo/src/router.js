import VueRouter from 'vue-router'

import FrontPage from './pages/FrontPage.vue'
import ArticlePage from './pages/ArticlePage.vue'

const routes = [
  { path: '/', component: FrontPage },
  { path: '/article/:id', component: ArticlePage },
]

const router = new VueRouter({ routes, mode: 'history' })

export default router