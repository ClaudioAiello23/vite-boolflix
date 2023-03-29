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
  }
}

</script>

<!-- PARTE HTML -->
<template>
  <AppHeader />
</template>
