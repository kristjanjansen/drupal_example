const api = axios.create({
    baseURL: '/jsonapi/',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
    }
})

// For parameters see https://www.drupal.org/docs/8/modules/json-api/fetching-resources-get
    
export async function getArticles(limit = 10) {
    const params = {
        'include': 'field_image,uid',
        'page[limit]': limit
    }
    const res = await api.get('node/article', { params })
    return jsonapi.parse(res.data).data
}

export async function getArticle(uuid) {
    const params = {
        'include': 'field_image,uid',
    }
    const res = await api.get(`node/article/${uuid}`, { params })
    return jsonapi.parse(res.data).data
}

export async function getArticleComments(uuid) {
    const params = {
        'include': 'field_image,uid',
        'filter[entity_id.uuid][value]': uuid
    }
    const res = await api.get(`comment/comment`, { params })
    return jsonapi.parse(res.data).data
}

export async function getArticleWithComments(uuid) {
    const article = await getArticle(uuid)
    const comments = await getArticleComments(uuid)
    return {...article, comments} 
}

export async function getUser(uuid) {
    const params = {
        'include': 'user_picture',
    }
    const res = await api.get(`user/user/${uuid}`, { params })
    return jsonapi.parse(res.data).data
}