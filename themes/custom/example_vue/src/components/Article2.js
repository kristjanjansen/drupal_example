import * as formatters from '../formatters.js'

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
            <img :src="article.field_image.url">
            <div v-html="formatBody(article.body.value)"></div>
        </article>
    `
}
