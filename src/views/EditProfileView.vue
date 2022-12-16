<template>
    <div style="margin-top: 6%;  margin-left: 6.5%;">
        <section class="inicio-content" style="width: 100%; padding: 10px; background-color: #000000; height: max-content; ">
            <h2 style="color: white; margin-left: 2%; padding: 1rem;">Editar información cuenta</h2>

            <hr style="color: #e6b26f; border: dotted;">

            <form  method="post" style="color:aliceblue; margin-left: 2%;">
    
                <label for="nickname" style="font-size: 2.5rem;">Nickname:</label><br>
                <input type="text" id="nickname" name="nickname" style=" border-radius: 1.5rem; background-color: #b89e77ec; width: 70%; font-size: 25px; padding: 0.5rem; border: transparent;">
                <br>
                <hr style="color: #000000;">
                <label for="profilePicture" style="font-size: 2.5rem;">Foto de perfil (Ingrese un link valido):</label><br>
                <input name="profilePicture" id="profilePicture" cols="100" rows="10" style="background-color: #b89e77ec; font-size: 25px;border-radius: 1.5rem; width: 70%; padding: 0.5rem;border: transparent;">
                <br>
                <hr style="color: #000000;">
                <label for="bannerPicture" style="font-size: 2.5rem;">Foto de portada (Ingrese un link valido):</label><br>
                <input name="bannerPicture" id="bannerPicture" cols="100" rows="10" style="background-color: #b89e77ec; font-size: 25px;border-radius: 1.5rem; width: 70%; padding: 0.5rem;border: transparent;">
                <br>
                <hr style="color: #000000;">
                
                <label for="linkIG" style="font-size: 2.5rem;">Link Instagram:</label><br>
                <img src="../assets/IGicon.png" alt="" style="padding-right:2rem; " >
                <input  name="linkIG" id="linkIG" cols="100" rows="10" style="background-color: #b89e77ec; font-size: 25px;border-radius: 1.5rem; width: 66.3%; padding: 0.5rem;border: transparent;">
                <br>
                <hr style="color: #000000;">
                <label for="linkFB" style="font-size: 2.5rem;">Link Facebook:</label><br>
                <img src="../assets/FBicon.png" alt="" style="padding-right:2rem; ">
                <input  name="linkFB" id="linkFB" cols="100" rows="10" style="background-color: #b89e77ec; font-size: 25px;border-radius: 1.5rem; width: 66.4%; padding: 0.5rem;border: transparent;">
                <br>
                <hr style="color: #000000;">
                <label for="linkTW" style="font-size: 2.5rem;">Link Twitter:</label><br>
                <img src="../assets/TWicon.png" alt="" style="padding-right:2rem; ">
                <input  name="linkTW" id="linkTW" cols="100" rows="10" style="background-color: #b89e77ec; font-size: 25px;border-radius: 1.5rem; width: 66.3%; padding: 0.5rem;border: transparent;">
                <br>
                <hr style="color: #000000;">
            
                <label for="descripcion" style="font-size: 2.5rem;">Descripcion:</label><br>
                <textarea name="desripcion" id="descripcion" cols="100" rows="10" style="background-color: #b89e77ec; font-size: 25px;border-radius: 1.5rem; width: 70%; padding: 0.5rem; height: 150px; border: transparent;"></textarea>

                <br>
                <br>
                <br>
                <router-link to="/profile">
                    <input type="submit" class="boton" value="Subir" style="margin-left: 58%; font-size: 30px; width: fit-content; padding-left: 4%; padding-right: 4%;">
                </router-link>
            </form>
            <br>
 
        </section>
    </div>

</template>

<script>


export default {
  name: 'EditProfileView',
  components: {
    
  }
}
</script>

<style scoped>

/*---------------CONTENT----------------- */

.boton{
    
    background-color: #312323;
    color:var(--blanco);
    padding: 1rem 3rem;
    margin-top: 1rem;
    font-size: 4rem;
    text-decoration: none;
    text-transform: uppercase;
    width: 300px;
    height: 70px;
    
    border-radius: 1.5rem;
    
    text-align: center;
}

.boton:hover{
    background-color: #814f33;
    cursor: pointer;
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
