<template>

    <main-layout>
        <div slot="content">
            <article-component
                v-for="article in articles"
                :key="article.id"
                :title="article.attributes.title"
                :body="article.attributes.body.summary"
                :link="'/article/' + article.id"
            >
            </article-component>
        </div>
    </main-layout>

</template>

<script>

    import MainLayout from '../layouts/MainLayout.vue'
    import ArticleComponent from '../components/ArticleComponent.vue'

    export default {
        components: { MainLayout, ArticleComponent },
        data: () => ({ articles: [] }),
        mounted() {
            this.$api.findAll('node--article', {
                page: { limit: 10 }
            }).then(res => this.articles = res)
        }
    }

</script>