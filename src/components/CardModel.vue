<!-- PARTE VUE JS-->
<script>

import { store } from '../store';

export default {
    name: 'CardModel',

    data() {
        return {
            store
        }
    }
}
</script>

<!-- PARTE HTML-->
<template>
    <div class="card_box" v-for="movie in store.movieResults">
        <div>Titolo: {{ movie.title.toUpperCase() }}</div>
        <div>Titolo originale: {{ movie.original_title.toUpperCase() }}</div>
        <div>Lingua: {{ movie.original_language.toUpperCase() }}</div>
        <div>Feedback: {{ movie.vote_average }}</div>
    </div>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped></style>