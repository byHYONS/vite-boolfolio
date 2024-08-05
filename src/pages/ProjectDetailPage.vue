<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ProjectDetailPage',
    data(){
        return{
            store,
            axios,
            detail: [],
        }
},
    components: {

    },
    methods: {
        apiCall() {
            console.log('sono lo show');
            console.log(this.$route);
            

            const { baseUrl, endPoints } = this.store.apiInfo;
            const url = baseUrl + endPoints.projectList + '/' + this.$route.params.slug;
            // console.log(url);
            // return
            axios
            .get(url)
            .then( response => {
                console.log(response.data.results);
                this.detail = response.data.results;
                
            })
            .catch((error) => console.log(error));
            
            

        }
    },
    created() {
        this.apiCall();
    },
    computed: {
        getTitleInType() {
            for (let key in this.detail.type) {
                console.log(key) 
                if (key === 'title') {
                    return this.detail.type[key];
                }
            }
            return null;
        },
        goBack() {
            this.$router.push({ name: 'home'});
        }
    }
}


</script>

<template>
    <main>
        <div class="item my-5">
            <div class="button mb-5">
                <button @click="goBack">Torna Indietro</button>
            </div>
        <div class="item_card" @click="openShow">
            <div class="card_detail row">
                <div class="card_image col-12 col-md-5 align-content-center">
                    <img :src="detail.image_frontend ? detail.image_frontend : '/img/no-image.webp'" 
                    :alt="detail.title">
                </div>
                <div class="card_info col-12 col-md-7 mt-5 ps-5">   
                    <p class="mt-4"><span>Titolo: </span> {{ detail.title }}</p>
                    <p v-if="detail.market_category"><span>Categoria: </span> {{ detail.market_category }}</p>
                    <p v-if="getTitleInType"><span>Tipo Cliente: </span> {{ getTitleInType }}</p>
                    <p v-if="detail.technologies.length > 0"><span>Tecnologie usate: </span>
                        <ul  v-for="technology in detail.technologies" :key="technology.id">
                            <li>
                            {{ technology.name }}
                            </li>               
                        </ul>
                    </p>
                </div>
            </div>
            <div class="card_desscription my-3">
                <p v-if="detail.description"><span>Descrizione: </span> {{ detail.description }} </p>
            </div>
        </div>
    </div>
    </main>
   
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/extende' as *;

main {
    align-content: center;

    .item {
        width: 90%;
        margin: auto;

        .button {
            text-align: end;

            button {
                padding: 10px 15px;
                background-color: $btn;
                border-radius: 10px;
                border: none;
                color: $text2;
                @extend %shadow;

                &:hover {background-color: $h_1;}
            }
        }

        .item_card {
            padding: 45px;
            background-color: $table;
            border-radius: 15px;
            overflow: scroll;
            @extend %shadow;
            cursor: pointer;
            span {
                color: $h_1;
                font-weight: 600;

                
                .card_detail {
                    align-items: center;
                   
                    .card_image {
                        height: 400px;
                        align-content: center;
                        object-fit: cover;
            
                        img {
                            height: 100%;
                        }
                    } 
                    .card_info {
                        
                    
                    }  
                }
                .card_desscription {
                   
                }
            }   
            
        }
    }
}
    
</style>