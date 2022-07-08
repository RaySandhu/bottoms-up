<script>
// import Navbar from './component/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
    <button>By Name</button>
    <button>By Ingredient</button>
</template>

//TestCounter
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">
    You clicked me {{ count }} times.
  </button>
</template>