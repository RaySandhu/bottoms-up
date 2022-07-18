<script>
import IngredList from "./searchIngredient/IngredList.vue"

    export default {
        name: 'SearchByIng',
        components: {
            IngredList
        },
        data(){

        }
    }
</script>

<template>
    <div class="ingredsearchparent">
        <IngredList />
    </div>
</template>

<style scoped>
    p {
        color:aliceblue
    }
</style>