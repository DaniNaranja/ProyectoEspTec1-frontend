<template>
    <nav class="nav-principal-contenedor sticky" style="height: 90px;">
           
            <router-link to="/">
                <img src="../assets/logo.png" alt="" class="logo">
            </router-link>

           <div class="titulo">
           <h1 >Mirart</h1>
           </div>

           
           
            <ul class="nav">
                     <li><a href=""><img class="hamburger-icon" src="../assets/Menuicon.png" alt="" style="height:45px; margin-top: 1rem;"></a>
                         <ul>
                             <li><router-link to="/register">Registro</router-link></li>
                         </ul>
                     </li>
                     </ul>     
           
       
           
       </nav>   
  
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


.nav-principal-contenedor{
    display: flex;
    flex-direction: row;
    background-color: #000;
    text-align: start;
    text-decoration: none;
    font-size: 2rem;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    z-index: 3;
    
     
}
.titulo{
    padding-top: 1.5rem;
    
}

.logo{
    padding: 0.8rem;
}

/*---------------HAMBURGER DROPDOWN------------*/ 

ul, ol {
    list-style:none;
}
.nav{
    margin-left: 85%;
    margin-top: -0.3rem;
}

.nav > li {
    float:left;
    
}

.nav li a {
    background-color: #000000;
    color:#fff;
    text-decoration:none;
    padding:1rem 1.2rem;
    display:block;
}

.nav li a:hover {
    background-color:#46352C;
}

.nav li ul {
    display:none;
    position:absolute;
    min-width:14rem;
}

.nav li:hover > ul {
    display:block;
    position:relative;
    
}

.nav li ul li {
    position:relative;
}

.nav li ul li ul {
    right:-14rem;
    top:0rem;
}

@media (min-width: 768px) {
    .nav{
        margin-left: auto;
    }
    
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky+.content {
  padding-top: 60px;
}


</style>