import * as formatters from '../formatters.js'

export default {
    props: ['comment'],
    methods: { ...formatters },
    template: `
        <div>
            <h4>
                Created by
                <a :href="'/user/'+comment.uid.id">{{comment.uid.name}}</a>
                {{formatDate(comment.created)}}
            </h4>
            <div v-html="formatBody(comment.comment_body.value)"></div>
        </div>
    `
}