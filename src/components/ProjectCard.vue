<script>

export default {
    name: 'ProjectCard',
    props: {
        cards: Object,
    },
data(){
   return{

   }
},
components: {

}
}

</script>

<template>

    <div class="item">
        <div class="item_card">
            <div class="card_image">
                <img :src="cards.image_frontend ? cards.image_frontend : '/img/no-image.webp'" 
                :alt="cards.title">
            </div>
           <p class="mt-4"><span>Titolo: </span> {{ cards.title }}</p>
           <p><span>Categoria: </span> {{ cards.market_category }}</p>
        </div>
    </div>

</template>


<style lang="scss" scoped>

@use '../assets/scss/partials/extende' as *;




.item {
    padding: 20px;
    .item_card {
        background-color: $table;
        height: 650px;
        padding: 25px;
        border-radius: 15px;
        overflow: scroll;
        @extend %shadow;
        span {
            color: $h_1;
            font-weight: 600;
        }

        .card_image {
            height: 400px;
            align-content: center;
            object-fit: cover;

            img {
                height: 100%;
            }
        }
    }
}
    
</style>