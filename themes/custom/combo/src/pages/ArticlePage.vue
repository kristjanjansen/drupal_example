<template>

    <main-layout>
        <div slot="content">
            <article-component
                :title="article.attributes.title"
                :body="article.attributes.body.value"
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
        data: () => ({ article: {
            attributes: {
                body: {}
            }
        }}),
        mounted() {
            this.$api.find('node--article', this.$route.params.id)
                .then(res => this.article = res)
        }
    }

</script>