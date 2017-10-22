import Frontpage from './pages/Frontpage.js'
import Articlepage from './pages/Articlepage.js'
import Userpage from './pages/Userpage.js'

const routes = {
    '/': Frontpage,
    '/article': Articlepage,
    '/user': Userpage,       
}

const route = window.location.pathname.split('/')

const render = async () => {
    const html = await routes['/'+route[1]](route[2])
    document.querySelector('#app').innerHTML = html
}

render()