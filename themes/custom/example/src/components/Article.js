export default article => `
    <a href="/article/${article.uuid}">
        <h2>${article.title}</h2>
    </a
    <p>${article.body.summary.replace(/\n\n/g, '</p><p>')}</p>
`