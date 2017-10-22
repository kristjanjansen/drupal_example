import React from 'react'
import { formatDate, formatBody } from '../formatters.js'

export default ({ comment }) =>
    <div>
        <h4>
            Created by
            <a href={comment && '/user/'+comment.uid.id}>{comment && comment.uid.name}</a>
            {formatDate(comment.created)}
        </h4>
        <div dangerouslySetInnerHTML={{
            __html: formatBody(comment.comment_body && comment.comment_body.value)
        }}>
        </div>
    </div>