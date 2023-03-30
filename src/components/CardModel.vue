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
    <div class="card_container">
        <div class="card_box" v-for="movie in store.movieResults">

            <div v-if="movie.title != null">Titolo: {{ movie.title }}</div>
            <div v-else>Titolo: {{ movie.name }}</div>

            <div v-if="movie.original_title != null">Titolo originale: {{ movie.original_title }}</div>
            <div v-else>Titolo originale: {{ movie.original_name }}</div>

            <div>Lingua: {{ movie.original_language }}</div>
            <country-flag country='it' size='small' /> <!-- da sistemare language-->
            <div>Feedback: {{ movie.vote_average }}</div>
        </div>
    </div>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped></style>