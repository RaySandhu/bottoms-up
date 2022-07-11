<script>
    export default {
        name: 'searchbar',
        methods: {
            generateArr() {
                //document.getElementById('ctSearch') is queried against the cocktail DB and 
                //this func returns the array of res.drinks
            },
            passCTArr(){
                this.$emit("updatelists", document.getElementById('ctSearch'))
            }
        }
    }
</script>

<template>
    <form>
        <input 
            id='ctSearch' 
            type="text" 
            class="searchbar"
            placeholder="Enter the Name of Your Cocktail Here" 
            autocomplete="off"
        />
        <button 
            id="createCTArr"
            type="button"
        >
        Search for Cocktails
        </button>
    </form>
</template>

<style scoped>
    .searchbar {
        background-color: rgb(218, 165, 32, 0.5);
        border-style: hidden;
        border-radius: 10px;
        height: 2.5rem;
        min-width: 400px;
        color: yellow;
        font-size: larger;
    }
</style>