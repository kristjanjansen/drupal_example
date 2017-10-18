import { formatDate } from '../utils.js'

export default comment => `
    <h4>
        Created by
        <a href="/user/${comment.uid.id}">${comment.uid.name}</a>
        ${formatDate(comment.created)}
    </h4>
    <p>${comment.comment_body.value.replace(/\n\n/g, '</p><p>')}</p>
`