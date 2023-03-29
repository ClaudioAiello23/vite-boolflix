<!-- PARTE VUE JS-->
<script>

export default {
    name: 'SearchBar'
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