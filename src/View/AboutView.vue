<script setup>
    import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <div>
        <h2>About Page</h2>
        <router-link :to="{name: 'team1'}">分頁1</router-link>|
        <router-link :to="{name: 'team2'}">分頁2</router-link>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<style lang="css" scoped>

</style>