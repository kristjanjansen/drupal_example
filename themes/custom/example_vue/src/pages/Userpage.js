import { getUser } from '../api.js'

import Header2 from '../components/Header2.js'

export default {
    components: { Header2 },
    template: `
        <div>
            <header2></header2>
            <main>
                <h2>{{user.name}}</h2>
                <pre>{{ user }}</pre>
            </main>
        </div>
    `,
    props: ['uuid'],
    data: () => ({ user: {} }),
    mounted() {
        getUser(this.uuid).then(user => this.user = user)
    }
}