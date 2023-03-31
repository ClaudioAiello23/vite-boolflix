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
<style lang="scss" scoped>
@use '../assets/styles/_partials/_variables.scss' as *;

main {
    height: calc($defaultHeight - $headerHeight);
    overflow: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>