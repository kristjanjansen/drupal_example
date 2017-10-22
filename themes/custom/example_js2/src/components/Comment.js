import { formatDate, formatBody } from '../formatters.js'

export default comment => `
    <div>
    <h4>
        Created by
        <a href="/user/${comment.uid.id}">${comment.uid.name}</a>
        ${formatDate(comment.created)}
    </h4>
    ${formatBody(comment.comment_body.value)}</p>
    </div>
`