import React, { Component } from 'react'

import { getArticleWithComments } from '../api.js'

import Header from '../components/Header.js'
import Article from '../components/Article.js'
import Comment from '../components/Comment.js'

export default class extends Component {
    state = { article: { comments: [] } }
    componentDidMount() {
        const { uuid } = this.props
        getArticleWithComments(uuid).then(article => this.setState({ article }))
    }
    render() {
        const { article } = this.state
        return (
            <div>
                <Header />
                <main>
                    {article && <Article article={article} />}
                    <aside>
                        <h3>Comments</h3>
                        {article && article.comments.map(comment => 
                            <Comment
                                comment={comment}
                                key={comment.uuid}
                            />
                        )}
                    </aside>
                </main>
            </div>
        )
    }
}
