import Frontpage from './pages/Frontpage.js'
import Articlepage from './pages/Articlepage.js'
import Userpage from './pages/Userpage.js'
//import Userpage from './pages/Userpage.js'

new Vue({
    el: '#app',
    components: { Userpage },
    template: `
        <userpage uuid="41ea5ed7-5421-4e3a-9bf6-df3889c998c4"></userpage>
    `
})

/*

        <articlepage uuid="73942b4f-41e2-4877-bb67-f3dbf28eb714"></articlepage>

const routes = {
    '/': Frontpage,
    '/article': Articlepage,
    '/user': Userpage,       
}

const route = window.location.pathname.split('/')

const render = async () => {
    const html = await routes[`/${route[1]}`](route[2])
    document.querySelector('#app').innerHTML = html
}

render()
*/