<template>
  <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>To Do List</h1>
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
          <IngredientItem></IngredientItem>
          <li v-for="ingred in ingredients" :key="ingredients.id">
            <button>{{ingred.title}}</button>
          </li>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button @click="clearSelected">Clear selected</button>
        <button @click="clearAll">Clear all</button>
      </div>
      <!-- pending task -->
      <!-- <div class="pendingTasks">
        <span>Pending Tasks: </span>
      </div> -->
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
          selected: false,
        });
        this.newIngred = "";
      }
    },
    clearSelected(){
      for(let i = 0; i < this.ingredients.length; i++){
        if(this.ingredients[i].selected){
          this.ingredients.splice(i,1);
        }
      }
    },
    clearAll(){
      this.ingredients.splice(0);
    }
  },
};
</script>