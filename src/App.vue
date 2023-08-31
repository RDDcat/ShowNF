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
  font-family: 'KBO Dia Gothic_medium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  margin: 0;
  padding: 0;
}
@font-face {
  font-family:'KOTRA_GOTHIC';
  src: url('assets/font/KOTRA_GOTHIC.ttf');
}
@font-face {
  font-family:'KOTRA_SONGEULSSI';
  src: url('assets/font/KOTRA_SONGEULSSI.ttf');
}
@font-face {
  font-family:'KBO Dia Gothic_medium';
  src: url('assets/font/KBO Dia Gothic_medium.ttf');
}

body{
  margin: 0;
  padding: 0;
}
.blank{  
  height: 16vh;
}
</style>
