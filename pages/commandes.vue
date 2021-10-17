<template>
    <div class="commandes-ctn">
        <div class="title">Commandes</div>
    <div class="card-ctn">
        <produit v-for="(produit,index) in produits" :key="index" class="card"  :nom="produit.nom" :prix="produit.prix" />
    </div>
    </div>
    
</template>
<script>
import  Produit  from "@/components/Produit.vue";
export default {
    components:{Produit},
data(){
    return {
        produits:[
            {nom:'Pizza 4 fromages',prix:7},
            {nom:'Burger végétarien',prix:7.5},
            {nom:'Burger Maison',prix:6},
            {nom:'Pizza végétarienne',prix:9},
            {nom:'Glace 2 boules',prix:5},
            {nom:'Glaces 3 boules',prix:7},
            {nom:'Pizza - Regina',prix:7},
            {nom:'Pizza saumon',prix:8},
            {nom:'Lasagnes',prix:7},
            {nom:'Salade Cesar',prix:7},
            {nom:'Pizza du jour',prix:7},
        ]
    }
}}
</script>
<style lang="scss" scoped>
.commandes-ctn{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .title{
        display: flex;
        font-size: 2vw;
        margin-bottom: 2vh;
    }
    .card-ctn{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
        align-items: center;
        .card{
            margin: 2wv;
            width: 30vw;
        }
      
    }
}

</style>