<script>

import HeaderComponent from './shared/HeaderComponent.vue';
import FooterComponent from './shared/FooterComponent.vue';

export default {
   name: 'App',
   components: {
      HeaderComponent,
      FooterComponent,
   },   
};

</script>

<template>

   <!--? HEADER -->
   <HeaderComponent />
   
   <!--? CONTENT -->
   <router-view></router-view>
   
   <!--? FOOTER -->
   <FooterComponent />
   
</template>