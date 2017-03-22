<template>

    <main-layout>
        <div slot="content">
            <article-component
                :body="page.attributes.body.value"
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
        props: ['id'],
        data: () => ({ page: {
            attributes: {
                body: {}
            }
        }}),
        mounted() {
            this.$api.find('node--page', this.id)
                .then(res => this.page = res)
        }
    }

</script>