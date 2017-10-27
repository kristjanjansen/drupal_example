// $.ajax('http://drupal_example.dev/jsonapi/node/article?include=uid')
//     .done(articles => {
//         console.log(articles)
//     })

import Article from './Article.js'

axios.get('http://drupal_example.dev/jsonapi/node/article?include=uid')
    .then(res => jsonapi.parse(res.data).data)
    .then(articles => {
        console.log(articles)
        document.querySelector('body').innerHTML = articles.map(Article)
        .join('')
    })