<template>
    
    <article class="article">
        <router-link :to="link">
            <h2 class="title">{{ title }}</h2>
        </router-link>
        <div class="body" v-html="body"></div>
    </article>

</template>

<script>

    export default {
        props: {
            title: { default: '' },
            body: { default: '' },
            link: { default: '' },
            date: { default: '' }
        },
        data: () => ({})
    }

</script>

<style scoped>

    .title {
        color: #222;
        font-family: 'Ovo', sans-serif;
        font-size: 1.75em;
        margin-bottom: 0.25em;
    }
    .body {
        color: #333;
        font-family: 'Muli', sans-serif;
        font-size: 1em;
        line-height: 1.5em;
        margin-bottom: 2em;
    }
    .body p {
        margin-bottom: 0.5em;
    }
    
</style>
