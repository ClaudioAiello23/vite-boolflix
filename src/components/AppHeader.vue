<!-- PARTE VUE JS-->
<script>
import { store } from '../store';

import SearchBar from './SearchBar.vue';

export default {
    name: 'AppHeader',
    components: {
        SearchBar
    },

    data() {
        return {
            store
        }
    },

    emits: ["inputSearch"], // dichiarazione $emit utilizzato nel comoonent, per evitare mex di warning in inspector-console.

    methods: {
        choice() {
            console.log('ho ascoltato la chiamata di searchBar, l input utente è ', this.store.searchUser)
            this.$emit('inputSearch');
        }
    }
}
</script>

<!-- PARTE HTML-->
<template>
    <header>
        <h1>BoolFix</h1>
        <SearchBar @userChoice="choice" />
    </header>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped>
@use '../assets/styles/_partials/_variables.scss' as *;

header {
    height: $headerHeight;
    border-bottom: .1875rem solid white;
}
</style>