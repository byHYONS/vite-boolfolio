<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
import { store } from '../store';


export default {
   name: 'HomePage',
   props: {

   },
   data(){
      return{
       store,
       axios,
       projects: [],

      }
   },
   components: {
    ProjectCard,

   },
   methods: {
        apiCall() {
            const {url} = this.store.apiInfo

            console.log('sono l\'apiCall')
            axios
            .get(url)
            .then(Response => {
                console.log(Response.data.results);
                this.projects = Response.data.results;
                console.log(this.projects[0].title)
            })
        },
    },
    created() {
        this.apiCall()
    }

}

</script>



<template>

<main>

    <div class="container">
       <div class="row">
        <div class="content" v-if="projects.length">
            
            <ProjectCard v-for="project in projects" :key="proje.id"
            :cards="project" />
          
        </div>
       </div>
    </div>


</main>

</template>



<style lang="scss" scoped>
// import

main {
    width: 100vw;
    height: 10vh;
    align-content: center;
    .content {
        width: calc(100% / 4);
        .card {

        }
        
    }
}


</style>
