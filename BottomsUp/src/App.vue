<script>
import Navbar from '../components/Navbar.vue'
import SearchByName from '../components/SearchByName.vue'
import SearchByIng from '../components/SearchByIng.vue'
  
export default {
  name: 'app',
  data() {
    return(
      {
        showing: true
      }
    )
  },
  components: {
    Navbar,
    SearchByIng,
    SearchByName
  },
  watch: {
   
  },
  methods: {
    renderCorrectSearchMenu(i) {
      //toggle between name and ingredients search
        //i is the boolean emitted by navbar to indicate which search menu is displayed
      this.showing = i
    }
  }
}
</script>

<template>
  <header>
	  <Navbar :display= true @change="renderCorrectSearchMenu"/>
  </header>
  <main>
    <div v-if="showing === true">
      <SearchByName />
    </div>
    <div v-else>
      <SearchByIng />
    </div>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Special+Elite&display=swap');
  body {
    background-color: black;
  }

  main{
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
</style>


