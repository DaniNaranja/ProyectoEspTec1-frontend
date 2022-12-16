<template>
  
    <div style="margin-top: 6%;  margin-left: 6.5%;">
      <section class="inicio-content" style="width: 100%; padding: 10px; background-color: #000000; height: 87.5vh; ">
        <h2 style="color: white; margin-left: 2%; padding: 1rem;">Subir dibujo</h2>

        <hr style="color: #e6b26f; border: dotted;">

        <form  method="post" style="color:aliceblue; margin-left: 2%;">
            <br>

            <label for="titulo" style="font-size: 2.5rem;">Titulo:</label><br><br>

            <input v-model="form.titulo" type="text" id="titulo" name="titulo" style="padding: 1rem; border-radius: 1.5rem; background-color: #b89e77ec; width: 70%; padding: 2rem; font-size: 25px;">
            <br>
            <br>
            
          
            <label for="descripcion" style="font-size: 2.5rem;">Descripcion:</label><br><br>
            <textarea v-model="form.descripcion" name="descripcion" id="descripcion" cols="100" rows="10" style="background-color: #b89e77ec; font-size: 25px;border-radius: 1.5rem; width: 70%; height: 200px;"></textarea>
            <br>
            <br>
            <label for="link" style="font-size: 2.5rem;">Link imagen:</label><br><br>
            <input v-model="form.url" type="text" id="link" name="link" style="padding: 1rem; border-radius: 1.5rem; background-color: #b89e77ec; width: 70%; padding: 2rem; font-size: 25px;">



            <br>
            <br>
            
            <input v-on:click="submit()" type="submit" class="boton" value="Subir" style="margin-left: 58%; font-size: 30px; width: fit-content; padding-left: 4%; padding-right: 4%;">
            
            
        </form>
        
        
      </section>
      
      
    </div>

    

  
</template>

<script>
import axios from 'axios'


export default {
  name: 'SubmitView',
  components: {
  },
  data(){
    return {
        form: {
            titulo: "",
            descripcion: "",
            url: "",
            
        }
    }
  },
  methods: {
    submit(){
        axios.post(`http://localhost:3000/submit/`+ this.$route.params.id, this.form)
        .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }
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
