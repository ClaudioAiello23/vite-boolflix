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
main {
    background-color: rgb(202, 210, 244);

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