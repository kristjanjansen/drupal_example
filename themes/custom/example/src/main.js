import Frontpage from './pages/Frontpage.js'
import Articlepage from './pages/Articlepage.js'
import Userpage from './pages/Userpage.js'

const route = window.location.pathname.split('/')

if (route[1] === 'article') {
    Articlepage(route[2]).then(html => {
        document.querySelector('#app').innerHTML = html
    })    
}
else if (route[1] === 'user') {
    Userpage(route[2]).then(html => {
        document.querySelector('#app').innerHTML = html
    })    
} else {
    Frontpage().then(html => {
        document.querySelector('#app').innerHTML = html
    })    
}

//getArticles().then(articles =>
    //document.querySelector('#app').innerHTML = articles.map(Article).join('')
//)
/*
const route = window.location.pathname.split('/')

console.log(route)

if (route[1] === 'article') {
    getArticleWithComments(route[2]).then(article =>
        document.querySelector('#app').innerHTML = Article(article) + article.comments.map(Comment).join('')
    )
} else {
    getArticles().then(articles =>
        document.querySelector('#app').innerHTML = articles.map(Article).join('')
    )
}
*/

