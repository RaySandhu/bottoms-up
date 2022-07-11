<script>
import mocktailDB from "../../mock(tail)DB.json"
export default {
    name: 'searchbar',
    data() {
        return {
            ctList: [],
            drinkList: mocktailDB.drinks
        }
    },
    methods: {
        generateArr() {
            //document.getElementById('ctSearch') is queried against the cocktail DB and 
            //this func returns the array of res.drinks
            let search = document.getElementById('ctSearch').value
            let options = JSON.parse(JSON.stringify(this.drinkList))

            options.forEach(ct => {
                //includes does not accomodate for casing differences
                if(ct.strDrink.includes(search)) {
                    return this.ctList.push(ct)
                }
            })
            this.passCTArr((JSON.parse(JSON.stringify(this.ctList))))
        
        },
        passCTArr(optionList){
            console.log(optionList)
            this.$emit("updatelists", optionList)
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
            @click="this.generateArr()"
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