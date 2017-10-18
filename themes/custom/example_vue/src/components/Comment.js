import * as formatters from '../utils.js'

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
            <p>{{comment.comment_body.value}}</p>
        </div>
    `
}