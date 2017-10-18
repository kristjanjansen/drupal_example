import { getArticleWithComments } from '../api.js'

import Headr from '../components/Headr.js'
import Articl from '../components/Articl.js'
import Comment from '../components/Comment.js'

export default {
    components: { Headr, Articl, Comment },
    template: `
        <div>
            <headr></headr>
            <main>
            <articl :article="article"></articl>
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
    data: () => ({ article: { uid: {}, body: {} }, comments: []}),
    mounted() {
        getArticleWithComments(this.uuid).then(article => {
            this.article = article
            this.comments = article.comments
        })
    }
}