<template>

    <div class="container">
        <header-component></header-component>
        <main>
            <slot name="content"></slot>
        </main>
        <footer-component></footer-component>
    </div>

</template>

<script>

    import HeaderComponent from '../components/HeaderComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'

    export default {
        components: { HeaderComponent, FooterComponent }
    }

</script>

<style>

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      text-decoration: none;
      color: black;
      box-sizing: border-box;
      list-style: none;
      font-weight: normal;
    }
    body {
        display: flex;
        justify-content: center;
    }

</style>

<style scoped>

    .container {
        width: 50vw;
        margin-top: 1.5em;
        margin-bottom: 7em;
    }

</style>
