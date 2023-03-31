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
    <div class="card_box" v-for="movie in store.movieResults">
        <div class="poster_box"><img v-bind:src="showImage(movie)" alt="img"></div>

        <div class="info_box">
            <div v-if="movie.title != null">
                <div>Categoria: MOVIE</div>
                <div class="card_title">{{ movie.title.toUpperCase() }}</div>
            </div>
            <div v-else>
                <div>Categoria: SERIE TV</div>
                <div class="card_title">{{ movie.name.toUpperCase() }}</div>
            </div>

            <div>Titolo originale: {{ movie.original_title }} {{ movie.original_name }}</div>

            <div>Lingua: {{ convertLanguage(movie.original_language.toUpperCase()) }}</div>

            <country-flag :country="convertLanguage(movie.original_language).toUpperCase()" size='small' />

            <div>Feedback: {{ convertFeedback(movie.vote_average) }}</div>
            <font-awesome-icon icon="fa-solid fa-star" v-for="star in convertFeedback(movie.vote_average)" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="star in (5 - convertFeedback(movie.vote_average))" />
        </div>
    </div>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped>
.card_box {
    width: 350px;
    margin: .625rem;

    .poster_box {
        width: 350px;
        height: 32.5rem;
        border: 1px solid white;
        cursor: pointer;

        &:hover {
            border: 3px solid yellow;
        }

        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }

    .card_title {
        font-weight: bold;
        color: rgb(223, 223, 6);
    }

    div {
        margin-bottom: 5px;
    }
}
</style>