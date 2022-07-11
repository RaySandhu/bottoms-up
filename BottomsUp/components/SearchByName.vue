<script>
    import SearchBar from "./searchName/SearchBar.vue"
    import CTOptions from "./CTOptions.vue"
    import CTDisplay from "./CTDisplay.vue"

    export default {
        name: 'NameSearch',
        components: {
            SearchBar,
            CTOptions,
            CTDisplay
        },
        data() {
            return {
                possibleList: Array,
                selectedCT: Object
            }
        },
        methods: {
            updateLists(newList) {
                this.possibleList = newList
            }
        }
    }
</script>

<template>
<div class="namesearchparent">
    <SearchBar @updateList='updateLists'/>
    <div v-if="possibleList != null && selectedCT == null">
        <CTOptions :toDisplay='this.possibleList' />
    </div>
    <div v-else-if="selectedCT != null">
        <CTDisplay :selectedCT='this.selectedCT' />
    </div>
</div>
</template>

<style scoped>
    .namesearchparent {
        display: flex;
    }
</style>