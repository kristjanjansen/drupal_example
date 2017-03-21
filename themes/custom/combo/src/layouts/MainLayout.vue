<template>

    <div class="content">
        <router-link to="/"><h1>This is sitename</h1></router-link>
        <slot name="header"></slot>
        <slot name="content"></slot>
    </div>

</template>

<style>

    body {
        font-family: 'Crimson Text', sans-serif;
        font-size: 20px;
        margin: 0;
        padding: 2rem;
        line-height: 1.5em;
        display: flex;
        justify-content: center;
        color: #222;
    }
    h1, h2, h3, h4 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #444;
        margin-bottom: 0;
        padding: 0;
    }
    h1 {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 20px;
        border-bottom: 1px solid #888;
        padding-bottom: 1.5em;
        margin-bottom: 2em;
        margin-top: 1em;
    }
    h2 {
        font-size: 20px;
    }
    a {
        color: #444;
        text-decoration: none;
    }
    .content {
        width: 50vw;
    }

</style>
