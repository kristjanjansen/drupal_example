import React from 'react'
import { formatDate, formatSummary } from '../formatters.js'

export default ({ article }) =>
    <article>
        <a href={'/article/'+article.uuid}>
            <h2>{article.title}</h2>
        </a>
        <h4>
            Created by 
             <a href={article && '/user/'+article.uid.id}>{article && article.uid.name}</a> 
            {formatDate(article.created)}
        </h4>
        <p>{formatSummary(article && article.body.summary)}</p>
    </article>