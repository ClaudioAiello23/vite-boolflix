<!-- PARTE VUE JS-->
<script>
import SearchBar from './SearchBar.vue';

export default {
    name: 'AppHeader',
    components: {
        SearchBar
    }
}
</script>

<!-- PARTE HTML -->
<template>
    <header>
        <h1>BoolFix</h1>
        <SearchBar />
    </header>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped></style>