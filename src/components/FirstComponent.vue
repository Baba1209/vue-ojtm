<template>
    <h2 id="myh">第一個 Component</h2>
</template>
<style scoped>
h2{
    color: orange;
}
</style>
<script setup>
import { onBeforeMount, onMounted } from 'vue';


onBeforeMount(()=>{
    console.log('組件即將掛載');
})
onMounted(()=>{
    console.log('組件掛載');
    const myh = document.querySelector('#myh');
    console.log('myH:', myh);
})
</script>