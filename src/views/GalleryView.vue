<template>

    <div style="margin-top: 6%;  margin-left: 6.5%;">
        <section class="content" style="width: 100%; padding: 10px; background-color: #000000; height:max-content;">
            <h2 style="color: white; padding-left: 20px;">Subidas recientes</h2>
            <br>
            <!--
        <div class="gallery" v-if="${dibujos.isEmpty()}">
            <h2 style="color: white">No se encuentran dibujos.</h2>
        </div>
        -->

            <div class="gallery" style="display:flexbox; flex-flow:wrap; margin-left: 3rem;">
               
                <router-link to="/visor">
                    <img class="demo cursor" src="../assets/logo.png" style="height:280px; margin: 1rem;">
                </router-link>
                
                
                
                
                
                
            </div>
        </section>
    </div>




</template>

<script>


export default {
    name: 'GalleryView',
    components: {

    }
}
</script>

<style scoped>
/*---------------CONTENT----------------- */

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
</style>
