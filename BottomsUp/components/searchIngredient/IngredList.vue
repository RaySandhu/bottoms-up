<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>My Ingredients:</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input type="text" placeholder="New Ingredient" v-model="newIngred" 
        @keyup.enter="addIngred"/>
        <button @click="addIngred">Add<i class="fas fa-plus"></i></button>
      </div>
      <!-- task lists -->
      <div class="ingredients">
        <ul>
          <IngredientItem 
            v-bind:ingredient="ingredient" 
            v-for="(ingredient, index) in ingredients" 
            :key="ingredient.id"
            @remove='removeIngredient(index)'
            >
          </IngredientItem>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button @click="clearAll">Clear all</button>
        <button @click="searchByIngredient">Mama needs a drink</button>
      </div>
    </div>
  </div>
</template>

<script>
import IngredientItem from './Ingredient-item.vue';

export default {
  name: "Ingredients",
  props: ['ingredients'],
  components: {
    IngredientItem,
  },
  data() {
    return{
      newIngred: "",
    }
  },
  methods: {
    addIngred(){
      if(this.newIngred){
        this.ingredients.push({
          title: this.newIngred,
        });
        this.newIngred = "";
      }
    },
    searchByIngredient(){
      let myIngredients = []
      for(let i = 0; i<this.ingredients.length; i++){
        myIngredients.push(this.ingredients[i].title);
      }
      console.log(myIngredients);
      console.log(myIngredients.includes('water'));
    },
    clearAll(){
      this.ingredients.splice(0);
    },
    removeIngredient(index){
      this.ingredients.splice(index,1);
    }
  },
};
</script>