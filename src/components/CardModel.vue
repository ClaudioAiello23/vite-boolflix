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
    <!-- Card Box -->
    <div class="card_box" v-for="movie in store.movieResults">
        <!-- Box copertina -->
        <div class="poster_box"><img v-bind:src="showImage(movie)" alt="img"></div>
        <!-- Box info film/serie tv -->
        <div class="info_box">
            <!-- Titolo film/serie tv -->
            <div v-if="movie.title != null">
                <div>Categoria: MOVIE</div>
                <div class="card_title"> {{ movie.title.toUpperCase() }}</div>
            </div>
            <div v-else>
                <div>Categoria: SERIE TV</div>
                <div class="card_title">{{ movie.name.toUpperCase() }}</div>
            </div>
            <!-- Titolo originale film/serie tv -->
            <div>Titolo originale: {{ movie.original_title }} {{ movie.original_name }}</div>
            <!-- Lingua e flag bandiera -->
            <div>Lingua: {{ convertLanguage(movie.original_language.toUpperCase()) }}
                <country-flag :country="convertLanguage(movie.original_language).toUpperCase()" size='small' />
            </div>
            <!-- Voto e stelline -->
            <div>Voto: {{ convertFeedback(movie.vote_average) }}/5
                <font-awesome-icon icon="fa-solid fa-star" v-for="star in convertFeedback(movie.vote_average)" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="star in (5 - convertFeedback(movie.vote_average))" />
            </div>
            <!-- Trama-->
            <div>TRAMA: {{ movie.overview }} </div>
        </div>
    </div>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped>
@use '../assets/styles/_partials/_variables.scss' as *;

.card_box {
    height: 32.5rem;
    width: 21.875rem;
    margin: .625rem;
    position: relative;

    &:hover {
        border: 1px solid $secondaryColor;

        .poster_box {
            opacity: 0;
        }

        .info_box {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            padding: .625rem;
            overflow: auto;

            div {
                margin-bottom: 1.25rem;
            }
        }
    }

    .poster_box {
        width: 21.875rem;
        height: 32.5rem;
        border: 1px solid white;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }

    .info_box {
        display: none;
        width: 20.625rem;
        height: 32.5rem;
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