<script>
import IngredList from "./searchIngredient/IngredList.vue"

    export default {
        name: 'SearchByIng',
        components: {
            IngredList
        },
        data(){
            return {
                ingredients: []
            }
        }
    }
</script>

<template>
    <div class="ingredsearchparent">
        <IngredList v-bind:ingredients="ingredients"/>
    </div>
</template>

<style scoped>
    p {
        color:aliceblue
    }
</style>