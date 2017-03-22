import VueRouter from 'vue-router'

import FrontPage from './pages/FrontPage.vue'
import ArticlePage from './pages/ArticlePage.vue'
import PagePage from './pages/PagePage.vue'

const routes = [
    {
        path: '/',
        component: FrontPage
    },
    {
        path: '/article/:id',
        component: ArticlePage,
        props: true
    },
    {
        path: '/page/:id',
        component: PagePage,
        props: true
    },
]

const router = new VueRouter({ routes, mode: 'history' })

export default router