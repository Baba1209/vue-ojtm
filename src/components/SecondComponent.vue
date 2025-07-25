<script setup>
import { ref } from 'vue';

    const author = ref({
        book:[
            'book1-spider',
            'book2-queen',
            'book3-yes'
        ]
    });
    const week = ref(["日", "一", "二", "三", "四","五", "六"]);
    const isDisabled = ref(false)
</script>

<template>
    <h1>第二個Component</h1>
    <h2>{{ `星期${week[6]}` }}</h2>
    <p>{{ author.book.length>0?"yes":"no" }}</p>
    <input type="checkbox" v-model="isDisabled"/>同意條款
    <button v-bind:disabled="!isDisabled">送出</button>
</template>

<style lang="css" scoped>
h1{
    color: brown;
}
</style>