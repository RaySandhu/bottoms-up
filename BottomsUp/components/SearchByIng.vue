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
                        completed: true
                    },                    {
                        id: 2,
                        title: "Watch Netflix",
                        completed: true
                    },                    {
                        id: 3,
                        title: "Shopping",
                        completed: false
                    },                    {
                        id: 4,
                        title: "Guitar",
                        completed: false
                    },                    {
                        id: 5,
                        title: "Exercise",
                        completed: true
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