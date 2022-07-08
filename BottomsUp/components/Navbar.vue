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
  <div className="buttons">
    <button @click="changeDisplay(true)"> By Name </button>
    <button @click="changeDisplay(false)">By ingredient</button>
  </div>
</template>

<style scoped>
  .buttons {
    display: flex;
    justify-content: space-around;
    background-color: inherit;
    width: 100%;
    margin-top: 100px;
    align-items: center;
  }

  button {
    border-color: rgb(218, 165, 32, 0.75);
    border-radius: 20px;
    font-size: larger;
    color: black;
    font-family: 'Montserrat' Geneva, Tahoma, sans-serif;
    /*font not working */
    background-color: rgb(218, 165, 32, 0.5);      
    height: 40px;
    width: 200px;
    text-transform: uppercase;
  }

  button:active{
    transform: translateY(3px);
  }
</style>
