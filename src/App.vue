<!-- PARTE VUE JS-->
<script>
import axios from 'axios'; //richiamo import axios
import { store } from './components/store.js' //richiamo collegamento store.js

import DefaultComponent from './components/DefaultComponent.vue';

export default {
  name: 'App',
  components: {
    DefaultComponent
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
  <DefaultComponent />
</template>
