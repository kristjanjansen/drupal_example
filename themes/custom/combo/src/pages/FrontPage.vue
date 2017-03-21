<template>

    <main-layout>
        <div slot="content">
            <article-row
                v-for="article in articles"
                :key="article.id"
                :title="article.attributes.title"
                :body="article.attributes.body.value.slice(0, 200)+'...'"
                :link="'/article/' + article.id"
            >
            </article-row>
        </div>
    </main-layout>

</template>

<script>

    import format from 'date-fns/format'

    import MainLayout from '../layouts/MainLayout.vue'
    import ArticleRow from '../components/ArticleRow.vue'

    export default {
        name: 'App',
        components: { MainLayout, ArticleRow },
        data: () => ({ articles: []}),
        mounted() {
            this.$http.get('/jsonapi/node/article?page[limit]=10')
                .then(res => {
                    this.articles = res.data.data.map(article => {
                        article.attributes.created
                            = format(
                                new Date(article.attributes.created * 1000),
                                'D. MMMM YYYY H:mm'
                            )
                        return article
                    })
                })
        }
    }

</script>