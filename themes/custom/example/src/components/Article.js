import { formatDate, formatBody } from '../formatters.js'

export default article => `
    <article>
        <h2>${article.title}</h2>
        <h4>
            Created by
            <a href="/user/${article.uid.id}">${article.uid.name}</a>
            ${formatDate(article.created)}
        </h4>
        <img src="${article.field_image.url}">
        <p>${formatBody(article.body.value)}</p>
    </article>
`