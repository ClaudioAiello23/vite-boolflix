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
    <div class="search_box">
        <label for="input_search"></label>
        <input type="text" id="input_search" placeholder="cerca il film" v-model="store.searchUser">
        <button type="submit" @click.prevent="$emit('userChoice')">Search</button>
    </div>
</template>

<!-- PARTE SCSS-->
<style lang="scss" scoped>
.search_box {

    input,
    button {
        padding: 5px 0;
    }
}
</style>