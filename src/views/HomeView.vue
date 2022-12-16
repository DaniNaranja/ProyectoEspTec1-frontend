<template>
  
    <div style="margin-top: 6%;  margin-left: 6.5%;">
      <section class="inicio-content" style="width: 100%; padding: 10px; background-color: #000000; ">
        <div>
          <!--v-for="usuario in usuarios" :key="usuario.id"-->
          <home-profile></home-profile>

          <hr style="color: #e6b26f; border: dotted;">

        </div>
        <home-profile></home-profile>

        <hr style="color: #e6b26f; border: dotted;">

        <home-profile></home-profile>
        

      </section>
      <br>
      <br>
      <br>
      <br>
      
    </div>

    

  
</template>

<script>

import HomeProfile from "../components/HomeProfile.vue";

export default {
  name: 'HomeView',
  components: {
    HomeProfile
  }
}
</script>

<style scoped>

/*---------------CONTENT----------------- */

.content {
  margin-left: 5%;
  margin-top: 5%;

  background-color: #000000;
  width: 100%;
  height: max-content
}





ul {
  list-style-type: none;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #FFFFFF;

}

.content a:hover {
  color: #c2975f;
}

.content a.active {
  background-color: #92672e;
}


/* The sticky class is added to the navbar with JS when it reaches its scroll position */

</style>
