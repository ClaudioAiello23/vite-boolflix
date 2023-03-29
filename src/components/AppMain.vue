<!-- PARTE VUE JS-->
<script>

import { store } from '../store';

export default {
    name: 'AppMain',

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
        <div class="movie_box" v-for="movie in store.movieResults">
            <div>Titolo: {{ movie.title.toUpperCase() }}</div>
            <div>Titolo originale: {{ movie.original_title.toUpperCase() }}</div>
            <div>Lingua: {{ movie.original_language.toUpperCase() }}</div>
            <div>Feedback: {{ movie.vote_count }}</div>
        </div>
    </main>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped>
main {
    .movie_box {
        border: 2px solid black;
        padding: .625rem;
        margin-bottom: .625rem;

        div {
            margin-bottom: 5px;
        }
    }
}
</style>