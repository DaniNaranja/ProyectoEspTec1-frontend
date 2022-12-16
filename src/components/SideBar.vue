<template>
    <div class="sidebar sticky" style="width: 100px;">
      <div class="sidebar-content">
        <router-link to="/">
           <img src="../assets/HOMEicon.png" alt="">
        </router-link>
         
        <router-link to="/gallery">
          <img src="../assets/HIGHLIGHTSicon.png" alt=""/>
        </router-link>
        

        <router-link to="/profile">
          <img src="../assets/PROFILE.png" alt=""/>
        </router-link>
         
        
        <router-link to="/submit">
          <img src="../assets/addICON.png" alt=""/>
        </router-link>
        

        
          
      </div>
    </div>
  
</template>

<script>
export default {

    name: 'SideBar',


}
</script>

<style scoped>

html{
    font-family: 'Alata', sans-serif;
}

.sidebar{
    background-color: #000000;
    top: 90px;
    bottom: 0;
    position: absolute;
    width: auto;
    height: 104vh;
    z-index: 2;

}

.sidebar-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-top: 100%;

}

.sb-faq{
    position: absolute;
    bottom: 2rem;
    left: 2rem;
}

.sidebar a.router-link-active{
    background-color:#46352C;
    padding: 1rem 1.9rem;
    
}

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