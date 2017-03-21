import Devour from 'devour-client'
import format from 'date-fns/format'

const api = new Devour({
    apiUrl:'http://drupal_combo.dev/jsonapi',
    pluralize: false
})

const deserializer = item => {
    item.attributes.created
        = format(
            new Date(item.attributes.created * 1000),
            'D. MMMM YYYY H:mm'
        )
    item.attributes.body.value = '<p>' + item.attributes.body.value
        .replace(/\n\n/g, '</p><p>') + '</p>'
    item.attributes.body.summary =  item.attributes.body.summary
        .slice(0, 200) + '...'
    return item
}

api.define('node--article', {
    title: '',
    body: '',
    created: '',
},
{
    collectionPath: 'node/article',
    deserializer
})

api.define('node--page', {
    title: '',
    body: '',
},
{
    collectionPath: 'node/page',
    deserializer
})

export default api