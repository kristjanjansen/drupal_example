import { getArticles } from '../api.js'

import Header2 from '../components/Header2.js'
import ArticleSummary from '../components/ArticleSummary.js'

export default {
    components: { Header2, ArticleSummary },
    template: `
        <div>
            <header2></header2>
            <main>
                <article-summary
                    v-for="article in articles"
                    key="article"
                    :article="article"
                ></article-summary>
            </main>
        </div>
    `,
    data: () => ({ articles: []}),
    mounted() {
        getArticles().then(articles => this.articles = articles)
    }
}