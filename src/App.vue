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

  methods: {
    searchMovies() {
      console.log('Da campo input AppHeader l utente ha inserito: ', this.store.searchUser)
      axios.get(store.config.apiMovies, {
        params: {
          api_key: this.store.config.apiKey, // parametro obbligatorio richiesto dall'API
          language: this.store.config.apiLanguage, // parametro facoltativo richiesto dall'API
          query: this.store.searchUser // parametro obbligatorio richiesto dall'API
        }
      }).then((response) => {
        console.log('risposta chiamata API Movies', response);
        this.store.movieResults = response.data.results;
        console.log('risultati ricerca Movie: ', this.store.movieResults);
      })

      axios.get(store.config.apiTvSeries, {
        params: {
          api_key: this.store.config.apiKey, // parametro obbligatorio richiesto dall'API
          language: this.store.config.apiLanguage, // parametro facoltativo richiesto dall'API
          query: this.store.searchUser // parametro obbligatorio richiesto dall'API
        }
      }).then((response) => {
        console.log('risposta chiamata API Tv Series', response);
        this.store.movieResults = response.data.results;
        console.log('risultati ricerca Tv Series: ', this.store.movieResults);
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