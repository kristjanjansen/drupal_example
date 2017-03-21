import Devour from 'devour-client'
import format from 'date-fns/format'

const api = new Devour({
    apiUrl:'http://drupal_combo.dev/jsonapi',
    pluralize: false
})

api.define('node--article', {
    title: '',
    body: '',
    created: '',
},
{
    collectionPath: 'node/article',
    deserializer: item => {
        item.attributes.created
            = format(
                new Date(item.attributes.created * 1000),
                'D. MMMM YYYY H:mm'
            )
        item.attributes.body.value = item.attributes.body.value
            .replace(/\n\n/g, '<br />')
        item.attributes.body.summary =  item.attributes.body.summary
            .replace(/\n\n/g, '<br />')
            .slice(0, 100) + '...'
        return item
    }
})

export default api

/*

jsonApi.findAll('node--article', {
    include: 'field_image',
    page: {limit: 1}
}).then(res => {
    //console.log(JSON.stringify(res,null,4))
})


var a = jsonApi.find('node--article', '2a417574-4e11-44c6-8992-cf8ef734e57b').then(res => {
    //console.log(res)
})

*/


