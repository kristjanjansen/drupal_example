import { getUser } from '../api.js'

import Headr from '../components/Headr.js'

export default {
    components: { Headr },
    template: `
        <div>
            <headr></headr>
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