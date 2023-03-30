<!-- PARTE VUE JS-->
<script>

import { store } from '../store';

import CountryFlag from 'vue-country-flag-next' // import pacchetto flags/bandiere da NPM

export default {
    name: 'CardModel',
    components: {
        CountryFlag // dichiarazione component Country Flag importato precedentemente nel component
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
    <div class="card_box" v-for="movie in store.movieResults">
        <div>Titolo: {{ movie.title.toUpperCase() }}</div>
        <div>Titolo originale: {{ movie.original_title.toUpperCase() }}</div>
        <div>Lingua: {{ movie.original_language.toUpperCase() }}</div>
        <country-flag country='fr' size='small' />
        <div>Feedback: {{ movie.vote_average }}</div>
    </div>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped></style>