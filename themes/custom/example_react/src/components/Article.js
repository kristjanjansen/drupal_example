import React from 'react'
import { formatDate, formatBody } from '../formatters.js'

export default ({ article }) =>
    <article>
        <h2>{article.title}</h2>
        <h4>
            Created by
            <a href={article.uid && '/user/'+article.uid.id}>{article.uid && article.uid.name}</a>
            {formatDate(article.created)}
        </h4>
        <img src={article.field_image && article.field_image.url} />
        <div dangerouslySetInnerHTML={{
            __html: formatBody(article.body && article.body.value)
        }}></div>
    </article>