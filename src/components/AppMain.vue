<!-- PARTE VUE JS-->
<script>

import { store } from '../store';

import CardModel from './CardModel.vue';

export default {
    name: 'AppMain',
    components: {
        CardModel
    },

    data() {
        return {
            store
        }
    }
}
</script>

<!-- PARTE HTML-->
<template>
    <main>
        <CardModel />
    </main>
</template>

<!-- PARTE SCSS-->
<style lang="scss">
@use '../assets/styles/_partials/_variables.scss' as *;

main {
    height: calc($defaultHeight - $headerHeight);
    overflow: auto;

    .card_box {
        border: 2px solid black;
        padding: .625rem;
        margin: .625rem 0;

        div {
            margin-bottom: 5px;
        }
    }
}
</style>