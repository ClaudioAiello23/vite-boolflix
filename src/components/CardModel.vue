<!-- PARTE VUE JS-->
<script>

import { store } from '../store';

import CountryFlag from 'vue-country-flag-next' // import pacchetto flags/bandiere da NPM

export default {
    name: 'CardModel',
    components: {
        CountryFlag // dichiarazione component Country Flag (pacchetto bandiere installato)
    },

    data() {
        return {
            store
        }
    },

    computed: {
        // showImage() {
        //     return this.store.config.apiImg + this.store.config.apiSizeImg + movie.poster_path
        // }
    },

    methods: {
        // funzione per convertire valore language e visualizzare flag/bandiera; come default stampa il valore dichiarato
        convertLanguage(language) {
            switch (language) {
                case 'en':
                    return 'gb'
                case 'ja':
                    return 'jp'
                default:
                    return language
            }
        },

        // funzione per somma link generale apiImages + dimensione img + percorso apiImg = link finale immagine
        showImage(element) {
            return this.store.config.apiImg + this.store.config.apiSizeImg + element.poster_path
        },

        // funzione per convertire feedback/voto da "1 a 10" a "1 a 5" e arrotondare all'intero succesivo (math.ceil)
        convertFeedback(value) {
            let finalNumber = Math.ceil(value / 2);
            return finalNumber
        }
    }
}
</script>

<!-- PARTE HTML-->
<template>
    <div class="card_container">

        <div class="card_box" v-for="movie in store.movieResults">
            <div><img v-bind:src="showImage(movie)" alt="img"></div>

            <div v-if="movie.title != null">Titolo Movie: {{ movie.title.toUpperCase() }}</div>
            <div v-else>Titolo Serie tv: {{ movie.name.toUpperCase() }}</div>

            <div v-if="movie.original_title != null">Titolo originale Movie: {{ movie.original_title.toUpperCase() }}</div>
            <div v-else>Titolo originale Serie Tv: {{ movie.original_name.toUpperCase() }}</div>

            <div>Lingua: {{ convertLanguage(movie.original_language.toUpperCase()) }}</div>

            <country-flag :country="convertLanguage(movie.original_language).toUpperCase()" size='small' />
            <!-- da installazione pacchetto country-flag -->

            <div>Feedback: {{ convertFeedback(movie.vote_average) }}</div>
            <font-awesome-icon icon="fa-solid fa-star" v-for="star in convertFeedback(movie.vote_average)" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="star in (5 - convertFeedback(movie.vote_average))" />

        </div>
    </div>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped></style>