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
      console.log('inserimento', this.store.searchUser)
      console.log('sono arrivato da AppHeader, inserire qui la chiamata')
      axios.get(store.config.apiMovies + store.searchUser)
        .then((response) => {
          console.log('risposta', response);
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