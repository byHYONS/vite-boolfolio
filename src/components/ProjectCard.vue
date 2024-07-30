<script>

export default {
    name: 'ProjectCard',
    props: {
        cards: Array,
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
        {{ cards }}
    </div>

</template>


<style lang="scss" scoped>

    
</style>