import { getArticles } from '../api.js'

import Header from '../components/Header.js'
import ArticleSummary from '../components/ArticleSummary.js'

export default async () => {
    const articles = await getArticles()
    return `
        ${Header()}
        <main>
            ${articles.map(ArticleSummary).join('')}
        </main>
    `
}