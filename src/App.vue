<!-- PARTE VUE JS-->
<script>
import { store } from './components/store.js'
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
