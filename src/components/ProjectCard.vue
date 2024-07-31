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

    <div class="card">
       <p> {{ cards.title }}</p>
       <p> {{ cards.slug }}</p>

    </div>

</template>


<style lang="scss" scoped>

    
</style>