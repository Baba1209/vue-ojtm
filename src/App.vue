<script setup>
import { RouterLink, RouterView } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeaderComponent from './components/HeaderComponent.vue';
// import ApiStyle from './components/ApiStyle.vue';
// import EventBinding from './components/EventBinding.vue';
// import FirstComponent from './components/FirstComponent.vue';
// import SecondComponent from './components/SecondComponent.vue';
// import ThirdComponent from './components/ThirdComponent.vue';






</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="container">
    
    <h2>Hello Vue!!</h2>
    <RouterView></RouterView>
    <!-- <FirstComponent></FirstComponent>
    <EventBinding></EventBinding>
    <SecondComponent></SecondComponent>
    <ThirdComponent></ThirdComponent>
    <ApiStyle></ApiStyle> -->
  
  </div>
</template>

<style scoped>
 h2{
  color: green;
 }
</style>
