<template>
        
    <header class="header">
        <router-link to="/">
            <h1 class="title">Sitename</h1>
        </router-link>
        <nav>
            <router-link
                class="link"
                v-for="page in pages"
                :key="page.id"
                :to="'/page/' + page.id"
            >{{ page.attributes.title }}
            </router-link>
        </nav>
    </header>

</template>

<script>

    export default {
        data: () => ({ pages: [] }),
        mounted() {
            this.$api.findAll('node--page', {
                page: { limit: 3 }
            })
            .then(res => this.pages = res)
        }
    }

</script>

<style scoped>

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7em;
    }
    .title {
        font-family: 'Muli', sans-serif;
        text-transform: uppercase;
        font-size: 1.5em;
    }
    .link {
        font-family: 'Muli', sans-serif;
        font-size: 1em;
        text-transform: uppercase;
        padding: 0.25em;
    }
    .link.router-link-active {
        border-bottom: 1.5px solid #333;
    }
    
</style>
