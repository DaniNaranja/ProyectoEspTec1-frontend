<template>
    <section class="inicio-profile">
          <router-link to="/profile">
            <div>
              <img src="../assets/profilephoto.png" style=" border-radius: 10px">
            </div>

          </router-link>
            

          <div class="info-user">
            <div class="inicio-rrss" >
              <li>
                <router-link to="/profile" class="user-name">
                  <h3 style="font-size:3.5rem"> Nickname</h3>
                  <hr style="color: #000000;">
                </router-link>
                  
                
                <a href="https://www.instagram.com/orenji_pyon/?hl=es-la">
                  <img src="../assets/IGicon.png" style="height: 40px; vertical-align: middle">
                  <span style="line-height: 5.5vh;">&nbsp;  Instagram</span>
                </a>
                <br>
                
                <a href="https://www.instagram.com/orenji_pyon/?hl=es-la">
                  <img src="../assets/TWicon.png" style="height: 40px; vertical-align: middle ">
                  <span style="line-height: 5.5vh;">&nbsp;  Twitter</span>
                </a>
                <br>
                

                <a href="https://www.instagram.com/orenji_pyon/?hl=es-la">
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
  
</template>

<script>
export default {

    name: 'NavBar',


}
</script>

<style scoped>

html{
    font-family: 'Alata', sans-serif;
}

.inicio-profile img {
  margin-left: 30px;
  margin-top: 2%;
  float: left;

}


.info-user {
  vertical-align: middle;
  margin-left: 3rem;
  color: #FFFFFF;
  font-size: 18px;
  display: inline;
  float: left;
}


.user-name h3:hover{
    color: #c2975f;
}

/*------------CAROUSEL------------------ */

.carousel{
  width: 60vh;
  margin-left: 60%;
}

.carousel-inner img {
  margin:auto;
}


ul{
    list-style-type: none;
}
li{
    list-style-type: none;
}
a{
    text-decoration: none;
    color: #FFFFFF;

}
a:hover{
    color: #c2975f;
}

.content a.active{
    background-color: #92672e;
}
  
  
  /* The sticky class is added to the navbar with JS when it reaches its scroll position */
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
  
  /* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
  .sticky + .content {
    padding-top: 60px;
  }



</style>