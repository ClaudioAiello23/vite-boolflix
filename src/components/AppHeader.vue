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

    methods: {
        choice() {
            console.log('ho ascoltato la chiamata di searchBar, l input utente è ', this.store.searchUser)
            console.log(this.store.searchUser)
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
<style lang="scss" scoped></style>