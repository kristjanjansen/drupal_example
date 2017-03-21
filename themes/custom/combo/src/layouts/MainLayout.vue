<template>

    <div class="main-layout">
        <header>
        <h1><router-link to="/">Sitename</router-link></h1>
        <nav>
        <router-link
            v-for="page in pages"
            :key="page.id"
            :to="'/page/' + page.id"
        >{{ page.attributes.title }}
        </router-link>
        </nav>
        </header>
        <slot name="content"></slot>
    </div>

</template>

<script>

    import MainLayout from '../layouts/MainLayout.vue'
    import ArticleComponent from '../components/ArticleComponent.vue'

    export default {
        components: { MainLayout, ArticleComponent },
        data: () => ({ pages: [] }),
        mounted() {
            this.$api.findAll('node--page', {
                page: { limit: 3 }
            })
            .then(res => this.pages = res)
        }
    }

</script>

<style>
    * {
        color: #222;
    }
    body {
        font-family: 'Muli', sans-serif;
        font-size: 18px;
        margin: 0;
        padding: 2rem;
        line-height: 1.5em;
        display: flex;
        justify-content: center;
    }
    h1 {
        font-family: 'Muli', sans-serif;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 28px;
        margin: 0
    }
    h2 {
        font-family: 'Ovo', sans-serif;
        font-size: 26px;
        margin: 1em 0 0.5em 0;
        color: #444;
    }
    a {
        text-decoration: none;
    }
    p {
        margin-bottom: 1em;
    }
    .main-layout {
        width: 50vw;
    }
    header {
        display: flex;
        justify-content: space-between;
        margin-top: 1.5em;
        margin-bottom: 7em;
    }
    nav > a {
        padding: 0.25em;
    }
    nav > .router-link-active {
        border-bottom: 1.5px solid #333;
    }
</style>
