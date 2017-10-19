import { getArticleWithComments } from '../api.js'

import Header2 from '../components/Header2.js'
import Article2 from '../components/Article2.js'
import Comment from '../components/Comment.js'

export default {
    components: { Header2, Article2, Comment },
    template: `
        <div>
            <header2></header2>
            <main>
                <article2 :article="article"></article2>
                <aside>
                    <h3>Comments</h3>
                    <comment
                        v-for="comment in comments"
                        key="comment"
                        :comment="comment"
                    ></comment>
                </aside>
            </main>
        </div>
    `,
    props: ['uuid'],
    data: () => ({ article: { uid: {}, body: { value: ''} }, comments: []}),
    mounted() {
        getArticleWithComments(this.uuid).then(article => {
            this.article = article
            this.comments = article.comments
        })
    }
}