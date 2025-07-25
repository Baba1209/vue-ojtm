<script setup>
    import { onMounted } from 'vue';

    onMounted(()=>{
        document.querySelector('#input1').focus();
    })
</script>

<template>
    <div>
        <input type="text" id="input1"/>
    </div>
    
</template>

<style lang="css" scoped>
</style>