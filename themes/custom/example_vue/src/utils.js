export function formatDate(timestamp) {
    return moment(timestamp, 'X').fromNow()
}