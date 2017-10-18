import * as formatters from '../utils.js'

export default {
    props: ['article'],
    methods: { ...formatters },
    template: `
        <article>
            <a :href="'/article/' + article.uuid">
                <h2>{{ article.title }}</h2>
            </a>
            <h4>
                Created by
                <a :href="'/user/'+article.uid.id">{{article.uid.name}}</a>
                {{formatDate(article.created)}}
            </h4>
            <p>{{article.body.summary.slice(0, 200)}}</p>
        </article>
    `
}