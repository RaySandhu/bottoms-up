<script>
import mocktailDB from "../../mock(tail)DB.json"
export default {
    name: 'searchbar',
    data() {
        return {
            ctList: Array,
            drinkList: mocktailDB.drinks
        }
    },
    methods: {
        generateArr() {
            //document.getElementById('ctSearch') is queried against the cocktail DB and 
            //this func returns the array of res.drinks
            let search = document.getElementById('ctSearch')

            this.drinkList.forEach(ct => {
                if(ct.strDrink.includes(search)) {
                    this.ctList.push(ct)
                }
            })
            console.log(this.ctList)
            // this.passCTArr()
        
        },
        passCTArr(){
            console.log(this.ctList)
            this.$emit("updatelists", this.ctList)
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