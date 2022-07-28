<script>
    import SearchBar from "./searchName/SearchBar.vue"
    import CTOptions from "./CTOptions.vue"
    import CTDisplay from "./CTDisplay.vue"

    export default {
        name: 'SearchByName',
        components: {
            SearchBar,
            CTOptions,
            CTDisplay
        },
        data() {
            return ({
                possibleList: [],
                selectedCT: {}
            })
        },
        methods: {
            updateLists(newList) {
                this.possibleList.push(...newList)
                console.log(JSON.parse(JSON.stringify(this.possibleList)), this.possibleList)
                return (JSON.parse(JSON.stringify(this.possibleList)))
            },
            updateSelection(selected) {
                this.selectedCT = selected
            }
        }
    }
    
</script>

<template>
<div class="namesearchparent">
    <SearchBar @updatelists='updateLists'/>


    <div v-if="(JSON.parse(JSON.stringify(possibleList))) != []">
        <CTOptions 
            :toDisplay='this.possibleList'
            @selection="updateSelection"
        />
    </div>
    <div v-else-if="selectedCT != {}">
        <CTDisplay :selectedCT='this.selectedCT' />
    </div>
</div>
</template>

<style scoped>
    .namesearchparent {
        display: flex;
        width: 100%;
    }
</style>