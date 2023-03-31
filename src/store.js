// STORE JS - STATO GLOBALE - STATE MANAGEMENT (PER EVITARE PROBLEMA DEL DRILLING CHE SI HA CON LE PROPS)
// CREO UNO STORE CHE CONTIENE LE INFO CHE VOGLIO GESTIRE NEL PROGETTO

import { reactive } from "vue";

export const store = reactive(
    {
        config: {
            apiMovies: 'https://api.themoviedb.org/3/search/movie?', // link API TMDB - Movies
            apiTvSeries: 'https://api.themoviedb.org/3/search/tv?', // link API TMDB -TvSeries
            apiKey: 'd22b0fdd8de41974c28e8ea0ca771862', //chiave API per il mio account tmdb
            apiLanguage: 'it-IT',
            apiImg: 'https://image.tmdb.org/t/p/',
            apiSizeImg: 'w342'
        },

        searchUser: '', //valore che l'utente inserisce nel campo input per la ricerca dei film

        movieResults: [], // array dei risultati dei movies/tv series che contiene la ricerca utente dal campo input
    })

// Una volta creato store.js, lo richiamo come import nel componente principale APP.vue e nel componente che ne richiede l'utilizzo;
// la funzione Axios che richiama l'Api del progretto si può scrivere direttamente nel file vue principale 'App.vue'.
