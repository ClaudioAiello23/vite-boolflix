<!-- PARTE VUE JS-->
<script>
import axios from 'axios'; //richiamo import axios
import { store } from './store.js' //richiamo collegamento store.js

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {

  name: 'App',
  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      store
    }
  },

  // computed: {
  //       convertLanguage() {
  //           switch (this.original_language) {
  //               case 'en':
  //                   return 'gb'
  //               default:
  //                   return this.original_language
  //           }
  //       }
  //   },

  methods: {
    searchMovies() {
      console.log('Da campo input AppHeader l utente ha inserito: ', this.store.searchUser)
      store.movieResults = []; // ogni volta che clicco su Search l'array movieResults parte vuoto; si riempirà con i push dei risultati delle chiamate axios.
      axios.get(store.config.apiMovies, {
        params: {
          api_key: this.store.config.apiKey, // parametro obbligatorio richiesto dall'API
          language: this.store.config.apiLanguage, // parametro facoltativo richiesto dall'API
          query: this.store.searchUser // parametro obbligatorio richiesto dall'API
        }
      }).then((response) => {
        console.log('risposta chiamata API Movies', response); // mostra in console array API Movies in merito alla ricerca
        response.data.results.forEach(element =>
          this.store.movieResults.push(element))
      })

      axios.get(store.config.apiTvSeries, {
        params: {
          api_key: this.store.config.apiKey, // parametro obbligatorio richiesto dall'API
          language: this.store.config.apiLanguage, // parametro facoltativo richiesto dall'API
          query: this.store.searchUser // parametro obbligatorio richiesto dall'API
        }
      }).then((response) => {
        console.log('risposta chiamata API Tv Series', response); // mostra in console array API TV Series in merito alla ricerca
        response.data.results.forEach(element =>
          this.store.movieResults.push(element))
        console.log('risultati ricerca Movies/TvSeries: ', this.store.movieResults); // mostra in console array finale (somma Movies + TvSeries)
      })
    }
  },

  created() {
    this.searchMovies();
  }
}

</script>

<!-- PARTE HTML -->
<template>
  <AppHeader @inputSearch="searchMovies" />
  <AppMain />
</template>