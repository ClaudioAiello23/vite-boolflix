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
    searchMovie() {
      console.log('inserimento dato utente da AppHeader:', this.store.searchUser)
      axios.get(store.config.apiMovies, {
        params: {
          api_key: this.store.config.apiKey,
          language: this.store.config.apiLanguage,
          query: this.store.searchUser
        }
      }).then((response) => {
        console.log('risposta chiamata API', response);
        this.store.movieResults = response.data.results;
        console.log('risultati ricerca Movie: ', this.store.movieResults); //nel console log vedo solo 20 risultati, riguarda la pagina?
      })
    }
  },

  created() {
    this.searchMovie();
  }
}

</script>

<!-- PARTE HTML -->
<template>
  <AppHeader @inputSearch="searchMovie" />
  <AppMain />
</template>