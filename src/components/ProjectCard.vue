<script>


export default {
    name: 'ProjectCard',
    props: {
        cards: Object,
    },
   
    components: {

    },
    methods: {
        openShow() {
            console.log('indirizzo alla show');

            this.$router.push({ name: 'detail', params: {slug: this.cards.slug}});
            
        }
    },
    computed: {
        getTitleInType() {
            for (let key in this.cards.type) {
                console.log(key) 
                if (key === 'title') {
                    return this.cards.type[key];
                }
            }
            return null;
        }
    }
}

</script>

<template>

    <div class="item">
        <div class="item_card" @click="openShow">
            <div class="card_image">
                <img :src="cards.image_frontend ? cards.image_frontend : '/img/no-image.webp'" 
                :alt="cards.title">
            </div>
           <p class="mt-4"><span>Titolo: </span> {{ cards.title }}</p>
           <p v-if="cards.market_category"><span>Categoria: </span> {{ cards.market_category }}</p>
           <p v-if="getTitleInType"><span>Tipo Cliente: </span> {{ getTitleInType }}</p>
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
        cursor: pointer;
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