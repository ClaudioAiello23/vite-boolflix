// STORE JS - STATO GLOBALE - STATE MANAGEMENT (PER EVITARE PROBLEMA DEL DRILLING CHE SI HA CON LE PROPS)
// CREO UNO STORE CHE CONTIENE LE INFO CHE VOGLIO GESTIRE NEL PROGETTO

import { reactive } from "vue";

export const store = reactive(
    {
        config: {
            apiKey: 'd22b0fdd8de41974c28e8ea0ca771862', //chiave API TMDB per il mio account
            apiMovies: 'https://api.themoviedb.org/3/search/movie?api_key=',
            apiTvSeries: 'url'
            //esempioArr: [],info da gestire
            //esempioVar: 0, info da gestire
            //esempioVar: '', info da gestire
        }
    })

// Una volta creato store.js, lo richiamo come import nel componente principale APP.vue e nel componente che ne richiede l'utilizzo;
// la funzione Axios che richiama l'Api del progretto si può scrivere direttamente nel file vue principale 'App.vue'.
