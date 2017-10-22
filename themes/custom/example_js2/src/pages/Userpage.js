import { getUser } from '../api.js'

import Header from '../components/Header.js'

export default async uuid => {
    const user = await getUser(uuid)
    return `
        ${Header()}
        <main>
            <h2>${user.name}</h2>
            <pre>${JSON.stringify(user,null,4)}</pre>
        </main>
    `
}