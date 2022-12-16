<template>
<div style="margin-top: 6%;  margin-left: 6.5%;">
    <section class="visor-content" style="width: auto ;">
        <div class="visor-image" v-if="drawing">
             <img :src="drawing.url" style="width: 50%; vertical-align: middle" alt="">

             <div class="visor-info">
                 <br>
                <h2 style="color: white; font-size: 50px; margin-left: 5%;">{{drawing.titulo}}</h2>
                
                <br> <br>
                
                
                <img src="../assets/PROFILE.png" style="vertical-align: middle; margin-left: 5%; width: 8%;">
                <span style="margin-left: 2%; font-size: 2.5rem; ">{{drawing.user.nickname}}</span>
                
                
                <div class="desc-dibu" style="margin-top: 5%; margin-left:5%; ">
                    <p class="descripcion" style="width: 87vh; height: 400px;  background-color: #795335; padding: 5%; color: #fff; font-size: 20px; border-radius: 20px;">{{drawing.descripcion}}</p>
                </div>
            </div>
             
        </div>

    </section>





</div>

</template>

<script>

import axios from 'axios'
export default {
    name: 'VisorView',
    components: {
    },
    data() {
        return {
            drawing: null
        }
    },

    mounted() {
        axios
        .get('http://localhost:3000/visor/'+this.$route.params.id)
        .then(res => {
            this.drawing = res.data;
            console.log(this.drawing)
        })
    }
}
</script>

<style scoped>
/*---------------CONTENT----------------- */

a{
    text-decoration: none;
    color: #fff;
}
a:hover{
    color: #c29a5f;
}

.visor-content{
    margin-top: 5%;
    
    background-color: #000000;
    height: 93vh;
    
}
.visor-image{
    margin-left: 2%;
    margin-top: 2%;
    
    display: flex;
   
}
</style>
