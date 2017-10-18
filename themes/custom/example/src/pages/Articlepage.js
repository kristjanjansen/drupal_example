import { getArticleWithComments } from '../api.js'

import Header from '../components/Header.js'
import Article from '../components/Article.js'
import Comment from '../components/Comment.js'

export default async uuid => {
    const article = await getArticleWithComments(uuid)
    return `
        ${Header()}
        <main>
            ${Article(article)}
            <aside>
                <h3>Comments</h3>
                ${article.comments.map(Comment).join('')}
            </aside>
        </main>
    `
}