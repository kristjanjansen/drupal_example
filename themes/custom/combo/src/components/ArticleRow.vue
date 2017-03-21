<template>
    
    <div>
        <router-link :to="link">
            <h2>{{ title }}</h2>
            <p>{{ date }}</p>
        </router-link>
        <div v-html="body"></div>
    </div>

</template>

<script>

    export default {
        props: {
            title: { default: '' },
            body: { default: '' },
            link: { default: '' },
            date: { default: '' }
        },
        data: () => ({}),
        mounted() {
        }
    }

</script>

<style>
</style>
