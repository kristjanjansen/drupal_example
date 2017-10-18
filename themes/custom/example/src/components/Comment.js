export default comment => `
    <h3>Created by ${comment.uid.name} at ${comment.created}</h3>
    <p>${comment.comment_body.value.replace(/\n\n/g, '</p><p>')}</p>
`