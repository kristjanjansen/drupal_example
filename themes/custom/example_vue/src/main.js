import Frontpage from './pages/Frontpage.js'
import Articlepage from './pages/Articlepage.js'
import Userpage from './pages/Userpage.js'

const routes = {
    '/': Frontpage,
    '/article': Articlepage,
    '/user': Userpage,       
}

const route = window.location.pathname.split('/')

new Vue({
    el: '#app',
    render(h) {
        return h(routes['/'+route[1]], {
            props: { uuid: route[2] }
        })
    }
})

