import * as formatters from '../utils.js'

export default {
    props: ['article'],
    methods: { ...formatters },
    template: `
        <article>
            <h2>{{ article.title }}</h2>
            <h4>
                Created by
                <a :href="'/user/'+article.uid.id">{{article.uid.name}}</a>
                {{formatDate(article.created)}}
            </h4>
            <p>{{article.body.value}}</p>
        </article>
    `
}
