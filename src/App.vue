<template>  
  <NavBar />
  <router-view />
  <div class="blank"></div>
  
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  methods: {
    movePage(data){
      alert(data);
    },
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
}
.blank{  
  height: 16vh;
}
</style>
