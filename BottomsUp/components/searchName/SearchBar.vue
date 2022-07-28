<script>
import mocktailDB from "../../mock(tail)DB.json"
export default {
    name: 'searchbar',
    data() {
        return {
            drinkList: mocktailDB.drinks
        }
    },
    methods: {
        generateArr() {
            //document.getElementById('ctSearch') is queried against the cocktail DB and 
            //this func returns the array of res.drinks
            let search = document.getElementById('ctSearch').value
            let options = JSON.parse(JSON.stringify(this.drinkList))
            let ctList= []
            options.forEach(ct => {
                //includes does not accomodate for casing differences
                if(ct.strDrink.includes(search)) {
                    return ctList.push(ct)
                }
            })
            this.passCTArr((JSON.parse(JSON.stringify(ctList))))
        
        },
        passCTArr(optionList){
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
    </form>
    <div>
        <button 
            id="createCTArr"
            @click="this.generateArr()"
        >
        Search for Cocktails
        </button>
    </div>
</template>

<style scoped>

    /* template {
        height: 100vh;
        top: 50%;        
        justify-content: center;
    } */
    .searchbar {
        margin: 50px 0;
        background: none;
        border-bottom: 1px solid white;
        border-top: none;
        border-left: none;
        border-right: none;
        min-width: fit-content;
        width: 400px;
        height: 30px;
        color: darkgoldenrod;
        font-family: 'Cormorant Garamond';
        font-size: 2rem;
        text-transform: uppercase;
        text-align: center;
    }

    .searchbar:focus {
        outline: none;
        border-bottom: 3px solid silver;
        color: goldenrod;
    }
</style>