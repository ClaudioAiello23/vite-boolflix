<!-- PARTE VUE JS-->
<script>
import { store } from '../store';

export default {
    name: 'SearchBar',

    data() {
        return {
            store
        }
    },

    emits: ["userChoice"], // dichiarazione $emit utilizzato nel comoonent, per evitare mex di warning in inspector-console.
}

</script>

<!-- PARTE HTML -->
<template>
    <!-- Input ricerca Movies/TVseries -->
    <label for="input_search"></label>
    <input type="text" id="input_search" v-model="store.searchUser">
    <!-- /Input ricerca Movies/TVseries -->

    <!-- Bottone Search -->
    <button type="submit" @click.prevent="$emit('userChoice')">Search</button>
    <!-- /Bottone Search -->
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped></style>