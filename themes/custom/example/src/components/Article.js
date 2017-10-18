import { formatDate } from '../utils.js'

export default article => `
    <article>
        <h2>${article.title}</h2>
        <h4>
            Created by
            <a href="/user/${article.uid.id}">${article.uid.name}</a>
            ${formatDate(article.created)}
        </h4>
        <p>${article.body.value.replace(/\n\n/g, '</p><p>')}</p>
    </article>
`