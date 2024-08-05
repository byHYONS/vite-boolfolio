<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
import { store } from '../store';


export default {
   name: 'HomePage',
   data(){
      return{
       store,
       axios,
       projects: [],
       currentPage: 1,

      }
   },
   components: {
    ProjectCard,

   },
   methods: {
        apiCall() {
            const { baseUrl, endPoints } = this.store.apiInfo;
            const url = baseUrl + endPoints.projectList;

            console.log('sono l\'apiCall')
            axios
            .get(url, {
                params: {
                    page: this.currentPage,
                }
            })
            .then(response => {
                console.log(response.data.results);
                this.projects = response.data.results;
                console.log(projects);
                return
            })
            .catch((error) => console.log(error));
        },
        prevPage() {
            this.currentPage--;
            this.apiCall();
        },
        nextPage() {
            this.currentPage++;
            this.apiCall();
        }
    },
    created() {
        this.apiCall()
    }

}

</script>



<template>

<main>

    <div class="container">
       <div class="row list">
            
            <!--? componente  -->
            <ProjectCard v-for="project in projects.data" :key="project"
            :cards="project" class="col-12 col-md-6 col-lg-4"/>

            <!--? bottoni per la navigazione -->
            <div class="page">
                <button @click="prevPage" class="mr-25" v-if="projects?.prev_page_url">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button @click="nextPage" v-if="projects?.next_page_url">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>

       </div>
    </div>


</main>

</template>



<style lang="scss" scoped>
// import:
@use '../assets/scss/partials/extende' as *;

main {
    width: 100vw;
    align-content: center;
    .container {
        padding: 35px 0 50px;

        .page {
            text-align: center;
            margin: 35px 0 50px;


            button {
                text-align: center;
                padding: 10px 35px;
                background-color: $btn;
                color: $table;
                border-radius: 10px;
                border: none;
                @extend %shadow;
                &:hover {background-color: $h_1;}
            }
        }
        
    }
}


</style>
