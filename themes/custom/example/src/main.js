import { getArticles, getArticleWithComments } from './api.js'
import Article from './components/Article.js'
import Comment from './components/Comment.js'

//getArticles().then(articles =>
    //document.querySelector('#app').innerHTML = articles.map(Article).join('')
//)

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


