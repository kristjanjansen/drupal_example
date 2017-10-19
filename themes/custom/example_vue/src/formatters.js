export function formatDate(timestamp) {
    return moment(timestamp, 'X').fromNow()
}

export function formatSummary(summary = '') {
    return summary.slice(0, 200) + '...'
}

export function formatBody(body = '') {
    return `<p>${body.replace(/\n\n/g, '</p><p>')}</p>`
}