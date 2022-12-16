<template>
  
    <div style="margin-top: 6%;  margin-left: 6.5%;">
      <section class="inicio-content" style="width: 100%; padding: 10px; background-color: #000000; ">
        <div v-for="user in users" :key="user.id">
          <section class="inicio-profile">
          
            <div v-on:click="checkProfile(user._id)">
              <img :src="user.profile" style=" border-radius: 10px; height: 200px;">
            </div>

          
            

          <div class="info-user">
            <div class="inicio-rrss" >
              <li>
                
                  <h3 style="font-size:3.5rem" @click="showProfile(user._id)"> {{ user.nickname}}</h3>
                  <hr style="color: #000000;">
                
                  
                
                <a :href="user.linkIG">
                  <img src="../assets/IGicon.png" style="height: 40px; vertical-align: middle">
                  <span style="line-height: 5.5vh;">&nbsp;  Instagram</span>
                </a>
                <br>
                
                <a :href="user.linkTW">
                  <img src="../assets/TWicon.png" style="height: 40px; vertical-align: middle ">
                  <span style="line-height: 5.5vh;">&nbsp;  Twitter</span>
                </a>
                <br>
                

                <a :href="user.linkFB">
                  <img src="../assets/FBicon.png" style="height: 48px; vertical-align: middle; ">
                  <span style="line-height: 5.5vh;">&nbsp;  Facebook</span>
                </a>
              </li>

            </div>
          </div>

          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-flex justify-content-center">
                  <img src="../assets/LOGOarte.png" class="d-block w-50" alt="...">
                </div>
                
              </div>
              <div class="carousel-item">
                <div class="d-flex justify-content-center">
                  <img src="../assets/LOGOarte.png" class="d-block w-50" alt="...">
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex justify-content-center">
                  <img src="../assets/LOGOarte.png" class="d-block w-50" alt="...">
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section>
          <hr style="color: #e6b26f; border: dotted;">

        </div>
        
        

      </section>
      <br>
      <br>
      <br>
      <br>
      
    </div>

    

  
</template>

<script>

//import HomeProfile from "../components/HomeProfile.vue";
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    let vue= this;
    axios.get('http://localhost:3000/')
    .then(function (response){
      vue.users= response.data;
    })
  },
  methods: {
    showProfile(id) {
      this.$router.push( {name:'profile', params: {id}});
    },
    
  }
}
</script>

<style scoped>

/*---------------CONTENT----------------- */





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
