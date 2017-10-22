import Frontpage from './pages/Frontpage.js'
import Articlepage from './pages/Articlepage.js'
import Userpage from './pages/Userpage.js'


import React from 'react'
import ReactDOM from 'react-dom'

//ReactDOM.render(<Frontpage />, document.querySelector('#app'))

ReactDOM.render(<Articlepage uuid="73942b4f-41e2-4877-bb67-f3dbf28eb714" />, document.querySelector('#app'))

/*
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
*/