<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view></router-view>
  <NavBar :pages='pages'></NavBar>
  
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data(){
    return {
      price1 : 60,
      pages: [
        {
          link : {text:'메인', url: 'MainPage'},
          pageTitle: 'MainPage'
        },
        {
          link : {text:'입양', url: 'AdoptPage'},
          pageTitle: 'AdoptPage'
        },
        {
          link : {text:'커뮤', url: 'CommunityPage'},
          pageTitle: 'CommunityPage'
        },
        {
          link : {text:'좋아', url: 'SwipePage'},
          pageTitle: 'SwipePage'
        },
        {
          link : {text:'마이', url: 'Mypage'},
          pageTitle: 'Mypage'
        },
      ]
    }
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
