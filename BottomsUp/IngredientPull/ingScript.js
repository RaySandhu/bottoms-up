const fs = require('fs')
const axios = require('axios')

let list  = []

async function ingRetrieve(id) {
    axios
    .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=' + id)
    .then(res => {
        // console.log(`statusCode: ${res.status}`)
        // console.log(res.data.ingredients[0].idIngredient, res.data.ingredients[0].strIngredient, res.data.ingredients[0].strAlcohol)

        return({
            id: res.data.ingredients[0].idIngredient,
            ingName: res.data.ingredients[0].strIngredient,
            isAlcoholic: res.data.ingredients[0].strAlcohol
        })
    })
    .then(res => {
        list.push(res)
        console.log(list)
    })
    .catch(error => {
        console.error(error)
    })
}

async function buildingList() {
    for (var i = 1; i <= 10; i++) {
        await ingRetrieve(i)
    }
    
}

buildingList()