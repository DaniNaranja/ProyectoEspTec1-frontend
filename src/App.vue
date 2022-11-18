<template>
  <nav-bar></nav-bar>
  <router-view/>
</template>

<script>

import NavBar from '../src/components/NavBar.vue'
export default{
  components: {
    NavBar
  }
}
</script>

<style>
@font-face {
  font-family: "Alata";
  src: local("Alata"),
  url(./fonts/Alata-Regular.ttf) format("truetype");
}

html{
    font-size: 62.5%;
    box-sizing: border-box;
    display: block;
    
}
*, *:before, *:after {
    box-sizing: inherit;
  }

body{
    font-size: 1.6rem; /* 1 rem= 10px  */
    font-family: 'Alata', sans-serif;
    background-color: #1F1414;
    z-index: 1;
}


h1{
    color: #FFFFFF;
    font-weight:100;
    font-size: 4rem;
}
h2 {
    font-size: 3rem;
}
h3 {
    font-size: 2.5rem;
    color: #FFFFFF;
    font-weight: 400;

}
</style>
