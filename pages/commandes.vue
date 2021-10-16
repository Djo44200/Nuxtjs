<template>
    <div>Commandes

        <div v-for="(produit,index) in produits" :key="index">
            {{produit.nom}}
        </div>


    </div>
    
</template>
<script>

export default {
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

</style>