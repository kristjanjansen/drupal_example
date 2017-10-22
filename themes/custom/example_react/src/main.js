import React from 'react'
import ReactDOM from 'react-dom'

import Frontpage from './pages/Frontpage.js'
import Articlepage from './pages/Articlepage.js'
import Userpage from './pages/Userpage.js'

const routes = {
    '/': Frontpage,
    '/article': Articlepage,
    '/user': Userpage,       
}

const route = window.location.pathname.split('/')

ReactDOM.render(
    React.createElement(routes['/'+route[1]], { uuid: route[2]}),
    document.querySelector('#app')
)

