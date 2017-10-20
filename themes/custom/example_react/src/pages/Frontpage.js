import React, { Component } from 'react'

import { getArticles } from '../api.js'

import Header from '../components/Header.js'
import ArticleSummary from '../components/ArticleSummary.js'

export default class extends Component {
    state = { articles: [] }
    componentDidMount() {
        getArticles().then(articles => this.setState({ articles }))
    }
    render() {
        const { articles } = this.state
        return (
            <div>
                <Header/>
                <main>
                    {articles.length && articles.map(article => 
                        <ArticleSummary article={article} key={article.uuid} />
                    )}
                </main>
            </div>
        )
    }
}