<template>
  <div id="app">
    <p v-for="post in posts" :key="post">{{post.author}}</p>
  </div>
</template>

<script>
import DataService from './DataService'


export default {

data(){
  return {
    posts:[]
  }
},
async mounted(){
  let data =new DataService();
  this.posts = await data.getAll();
  console.log(this.posts);
  
}
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
