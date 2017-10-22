import React, { Component } from 'react'

import { getUser } from '../api.js'

import Header from '../components/Header.js'

export default class extends Component {
    state = { user: {} }
    componentDidMount() {
        const { uuid } = this.props
        getUser(uuid).then(user => this.setState({ user }))
    }
    render() {
        const { user } = this.state
        return (
            <div>
                <Header />
                <main>
                    <h2>{user.name}</h2>
                    <pre>{JSON.stringify(user,null,4)}</pre>
                </main>
            </div>
        )
    }
}