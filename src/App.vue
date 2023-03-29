<!-- PARTE VUE JS-->
<script>
import axios from 'axios'; //richiamo import axios
import { store } from './store.js' //richiamo collegamento store.js

import AppHeader from './components/AppHeader.vue';

export default {

  name: 'App',
  components: {
    AppHeader
  },

  data() {
    return {
      store
    }
  },

  methods: {
    search() {
      console.log('inserimento dato utente da AppHeader:', store.searchUser)
      axios.get(store.config.apiMovies + store.searchUser)
        .then((response) => {
          console.log('risposta', response);
          this.store.movieResults = response.data.results;
          console.log('risultati chiamata movie: ', this.store.movieResults); //nel console log vedo solo 20 risultati, riguarda la pagina?
        })
    }
  },

  created() {
    this.search();
  }
}

</script>

<!-- PARTE HTML -->
<template>
  <AppHeader @inputSearch="search" />
</template>