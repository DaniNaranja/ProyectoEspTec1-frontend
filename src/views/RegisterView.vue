<template>
    <div :style="{'background-image': 'url(https://iili.io/HogeEap.png)'}" style="height:100vh">
        <div class="contenedor-form"
     style="background-color: rgba(0,0, 0, 0.7); height: 120.5rem;max-height: 100%; width: 25%; margin-left: 10%;">
    <form th:action="@{/form_registro}" th:object="${artista}" method="post" style="color:aliceblue; padding-left: 5%;">
        <br>
        <label style="font-size: 3rem;">Regístrate</label><br><br>

        <label for="nickname" style="font-size: 2.5rem;">Nombre Usuario:</label><br><br>
        <input type="text" id="nickname" name="nickname" th:field="*{nickname}"
               style=" border-radius: 1.5rem; background-color: #b89e77ec; width: 90%; padding: 1rem; font-size: 25px; border: transparent;"
               required>
        <br>
        <br>

        <label for="email" style="font-size: 2.5rem;">E-mail:</label><br><br>
        <input type="email" id="email" name="email" th:field="*{email}"
               style="padding: 1rem; border-radius: 1.5rem; background-color: #b89e77ec; width: 90%; font-size: 25px;border: transparent;"
               required>
        <br>
        <br>

        <label for="password" style="font-size: 2.5rem;">Contraseña:</label><br><br>
        <input type="password" id="password" name="password" th:field="*{password}"
               style="padding: 1rem; border-radius: 1.5rem; background-color: #b89e77ec; width: 90%; font-size: 25px;border: transparent;"
               required>
        <br>
        <br>


        <input type="hidden" th:field="*{id}">

        <br>
        <br>
        <br>
        <input type="submit" class="boton-login" style="margin-left: 50%; width: 200px;" value="Crear cuenta">
    </form>
    <br>
    <br>


</div>

    </div>
    
  
</template>

<script>
export default {
    name: 'RegisterView'

}
</script>

<style scoped>

:root{
    --blanco: #FFFFFF;
    --oscuro: #000000;
    --cafe: #1F1414;
    --secundario:#583f31;
    --terciario:#C5C0A2 ;

    --fuente-principal: 3.8rem
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
    background-image: url(../assets/fondo.png);
    background-size: cover;
    background-position-y: 60px;
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



/*=================LOGIN=====================*/



.boton-login{

    border: transparent;
    
    background-color: #5e3720;
   
    padding: 1rem 2rem;

    font-size: 2.5rem;
    
    border-radius: 1.5rem;
    
    
}

.boton-login:hover{
    background-color: #97653c;
    cursor: pointer;
    color: #FFFFFF;
}






  





  
  









</style>