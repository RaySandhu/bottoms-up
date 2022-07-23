<script>
import IngredList from "./searchIngredient/IngredList.vue"

    export default {
        name: 'SearchByIng',
        components: {
            IngredList
        },
        data(){
            return {
                ingredients: [
                    {
                        id: 1,
                        title: "Learn Vue",
                        selected: true
                    },                    {
                        id: 2,
                        title: "Watch Netflix",
                        selected: true
                    },                    {
                        id: 3,
                        title: "Shopping",
                        selected: false
                    },                    {
                        id: 4,
                        title: "Guitar",
                        selected: false
                    },                    {
                        id: 5,
                        title: "Exercise",
                        selected: true
                    },                    
                ]
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