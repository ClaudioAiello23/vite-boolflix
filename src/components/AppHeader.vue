<!-- PARTE VUE JS-->
<script>
import SearchBar from './SearchBar.vue';

export default {
    name: 'AppHeader',
    components: {
        SearchBar
    },
    methods: {
        search() {
            console.log('ho ascoltato la chiamata di searchBar')
            //console.log('this.store.searchUser') prova di messaggio al click del bottone
        }
    }
}
</script>

<!-- PARTE HTML -->
<template>
    <header>
        <h1>BoolFix</h1>
        <SearchBar @userChoice="search" />
    </header>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped></style>