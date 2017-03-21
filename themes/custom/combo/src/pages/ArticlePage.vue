<template>

    <main-layout>
        <div slot="content">
            <article-row
                :title="article.attributes.title"
                :body="article.attributes.body.value.replace(/\n/g, '<br>')"
            >
            </article-row>
        </div>
    </main-layout>

</template>

<script>

    import MainLayout from '../layouts/MainLayout.vue'
    import ArticleRow from '../components/ArticleRow.vue'

    export default {
        data: () => ({ article: {
            attributes: {
                body: {}
            }
        }}),
        components: { MainLayout, ArticleRow },
        mounted() {
            this.$http.get('/jsonapi/node/article/' + this.$route.params.id)
                .then(res => {
                    this.article = res.data.data
                })
            
        }
    }

</script>