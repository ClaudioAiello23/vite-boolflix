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
        <h1>BoolFlix <span>Film e Serie TV</span></h1>
        <nav>
            <ul>
                <li><a href="#" v-for="nav in store.navBar">{{ nav.toUpperCase() }}</a></li>
            </ul>
        </nav>
        <SearchBar @userChoice="choice" />
    </header>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped>
@use '../assets/styles/_partials/_variables.scss' as *;

header {
    height: $headerHeight;
    padding: 0 1.25rem;
    border-bottom: .1875rem solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 50px;
        color: red;
    }

    span {
        font-size: 25px;
        color: $secondaryColor;
    }

    ul {
        display: flex;
        list-style: none;

        li a {
            text-decoration: none;
            padding: 1.25rem;
            color: red
        }
    }
}
</style>