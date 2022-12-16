<template>
  

    <div style="margin-top: 6%; margin-left: 6.5%;">
    <section class="content" style="width: 100%; padding: 10px; background-color: #000000;">

      
       
      
        <div class="hero-image">
            <img src="../assets/fondo.png" style="width: 188vh; height: 40rem; object-fit: cover;">
            <div class="hero-content">
              <div style="display:inline-block; vertical-align:top">
                <img src="../assets/profilephoto.png" class="profile-photo" style="border-radius: 150px; height: 300px; width: 300px; margin-top: 20%;">
              </div>  
              <div class="hero-text" style="display: inline-block; ">
                <h1>Nickname</h1>
                    

                </div>
            
              </div>
        </div>   
      
      
          

            <section class="profile-content">
              <p style="color: white; font-size: 30px; margin-left:1%; margin-top: 0.5%;">Sobre mi:</p>
 
                <div class="textbox">
                    <p class="descripcion" style="width: 100rem; background-color: #271E1E; padding: 3rem; border-radius: 20px;">Lorem ipsum cosa</p>

                        <li class="profile-rrss">
                    
                            <a href="https://www.instagram.com/orenji_pyon/?hl=es-la">
                            <img src="../assets/IGicon.png" style="height: 40px; vertical-align: middle"> 
                            <span>&nbsp;&nbsp;Instagram</span>
                            </a>
                            <hr style="color: #000000;">
                            
                            <a href="https://www.instagram.com/orenji_pyon/?hl=es-la">
                                <img src="../assets/TWicon.png" style="height: 40px; vertical-align: middle">
                                <span>&nbsp;&nbsp;Twitter</span>
                            </a>
                            <hr style="color: #000000;">
                        
                            <a href="https://www.instagram.com/orenji_pyon/?hl=es-la">
                                <img src="../assets/FBicon.png" style="height: 40px; vertical-align: middle"> 
                                <span>&nbsp;&nbsp;Facebook</span> 
                            </a>
                        </li>
                        <router-link to="/edit_profile">
                          <div class="boton" style="margin-left: 29rem;">
                            <span>Editar&nbsp;&nbsp;</span>
                            <img src="../assets/editICON.png" alt="" style="height:35px">
                          </div>
                        </router-link>
                        
                 </div>
                 <br>
                 <hr style="color: #e6b26f; border: dotted;">

               

                <div class="gallery" >
                    <div class="row">
                        <div class="column"> <!--AGREGAR IF Y FOR DIBUJO IGUAL QUE PROYECTO ANTERIOR-->
                            <router-link to="/visor">
                                <img class="demo cursor" src="../assets/logo.png" style="width:100%; padding: 2rem;"  >
                            </router-link>
                        </div>
                        <div class="column"> <!--AGREGAR IF Y FOR DIBUJO IGUAL QUE PROYECTO ANTERIOR-->
                            <router-link to="/visor">
                                <img class="demo cursor" src="../assets/logo.png" style="width:100%; padding: 2rem;"  >
                            </router-link>
                        </div>
                        <div class="column"> <!--AGREGAR IF Y FOR DIBUJO IGUAL QUE PROYECTO ANTERIOR-->
                            <router-link to="/visor">
                                <img class="demo cursor" src="../assets/logo.png" style="width:100%; padding: 2rem;"  >
                            </router-link>
                        </div>
                        <div class="column"> <!--AGREGAR IF Y FOR DIBUJO IGUAL QUE PROYECTO ANTERIOR-->
                            <router-link to="/visor">
                                <img class="demo cursor" src="../assets/logo.png" style="width:100%; padding: 2rem;"  >
                            </router-link>
                        </div>
                        <div class="column"> <!--AGREGAR IF Y FOR DIBUJO IGUAL QUE PROYECTO ANTERIOR-->
                            <router-link to="/visor">
                                <img class="demo cursor" src="../assets/logo.png" style="width:100%; padding: 2rem;"  >
                            </router-link>
                        </div><div class="column"> <!--AGREGAR IF Y FOR DIBUJO IGUAL QUE PROYECTO ANTERIOR-->
                            <router-link to="/visor">
                                <img class="demo cursor" src="../assets/logo.png" style="width:100%; padding: 2rem;"  >
                            </router-link>
                        </div>
                    </div>
                </div>


     
            </section>

            
      
    </section>
    </div>
    
</template>

<script>
export default {
    name: 'ProfileView',

}
</script>

<style scoped>

  .hero-content {
    
    position: absolute;
    top: 12.5%;
    margin-left: 4%;
    
    color: white;
     
  }

  .hero-text{
      
      font-size: 4rem;
      margin-left: 3rem;
      margin-top: 25% ;
  }

  .hero-text h1{
      font-size: 6rem;
  }
  

  .textbox{
    height: 25rem;
    margin-left: 1%;
    display: flex;
    flex-direction: row;
    margin-top: 0.5%;
  }
.descripcion{
    font-size: 25px;
    text-align: justify;
    color: #FFFFFF;
    
}

.profile-rrss{
  list-style: none;
    margin-left: 3%;
    vertical-align: middle;
    margin-top: 10px;
    font-size: 30px;
}

.boton{
    
    background-color: #312323;
    color:#FFFFFF;
    padding: 1.7rem 3rem;
   
    font-size: 2.5rem;
    text-decoration: none;
    
    width: 200px;
    height: 70px;
    
    border-radius: 1.5rem;
    
    text-align: center;
}

.boton:hover{
    background-color: #814f33;
    cursor: pointer;
}

a {
  text-decoration: none;
  color: #FFFFFF;
}



* {
    box-sizing: border-box;
  }

  a:hover {
  color: #c2975f;
}
  
  /* Position the image container (needed to position the left and right arrows) */
 
  
  
  /* Add a pointer when hovering over the thumbnail images */
  .cursor {
    cursor: pointer;
  }

  
  /* Six columns side by side */
  .column {
    float: left;
    width: 16.66%;
  }
  
  /* Add a transparency effect for thumnbail images */
  .demo {
    opacity: 0.6;
  }
  
  .active,
  .demo:hover {
    opacity: 1;
  }






</style>