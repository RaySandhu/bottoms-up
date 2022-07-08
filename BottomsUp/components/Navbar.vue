<script>
  export default {}
</script>

<template>
  <div className="buttons">
    <button>By Name</button>
    <button>By Ingredient</button>
  </div>
</template>

<style scoped>
  .buttons {
    display: flex;
    justify-content: space-around;
    background-color: inherit;
    width: 100%
  }

  button {
    border-style: hidden;
    font-size: larger;
    color: goldenrod;
    background-color: black;
  }
</style>
