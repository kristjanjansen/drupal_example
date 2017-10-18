import { getArticles } from '../api.js'

import Headr from '../components/Headr.js'
import ArticleSummary from '../components/ArticleSummary.js'

export default {
    components: { Headr, ArticleSummary },
    template: `
        <div>
            <headr></headr>
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