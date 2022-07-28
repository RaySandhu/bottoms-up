<script>
  export default {
    props : {
      display: Boolean
    },
    watch: {
      
    },
    methods: {
      changeDisplay(bool) {
        console.log(bool)
        this.$emit("change", bool)
      }
    }
  }
</script>

<template>
  <div className="button-display">
    <button class = 'button-choice button-slanted' @click="changeDisplay(true)"> 
      <span class="button-slanted-content"> Search Cocktail By Name</span>
    </button>
    <button class = 'button-choice button-slanted' @click="changeDisplay(false)">
      <span class="button-slanted-content"> Search Cocktail By Ingredient</span>
    </button>
  </div>
</template>

<style scoped>
  /* .buttons {
    display: flex;
    justify-content: space-around;
    background-color: inherit;
    width: 100%;
    margin-top: 100px;
    align-items: center;
  } */

  /* button {
    border-color: rgb(218, 165, 32, 0.75);
    border-radius: 20px;
    font-size: 2vem;
    color: yellow;
    background-color: rgb(218, 165, 32, 0.5);      
    height: 40px;
    width: 200px;
    text-transform: uppercase;
  } */

  /* button:active{
    transform: translateY(3px);
  } */

  a {
    text-decoration: none;
    color: inherit;
  }

  .button-display {
    display: flex;
    text-align: center;
    justify-content: center;
    height:100vh;
    top: 50%;
  }

  .button-choice {
    display:inline-block;
    padding:0.35em 1.2em;
    border:0.1em solid goldenrod;
    margin:10rem -0.1rem 0.1em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Cormorant Garamond', sans-serif;
    font-weight:bolder;
    font-size: 2rem;
    color:goldenrod;
    text-align:center;
    background-color: inherit;
    transition: all 0.4s;
    cursor: pointer;
    max-height: 90px;
  }
  .button-choice:hover{
    color: black;
    background-color: darkgoldenrod;
    border-color: darkgoldenrod
  }

  .button-choice:focus {
    color: black;
    background-color: darkgoldenrod;
    border-color: darkgoldenrod
  }

  .button-slanted {
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
  }

  .button-slanted-content {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);  
    display: inline-block;
  }
</style>
