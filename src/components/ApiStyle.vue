<script setup>
    import { ref } from 'vue';
    
    const message = ref('Hello World!')
    const count = ref(0)
    const user = ref({
        firstName: 'Joyce',
        lastName: 'Hsu'

    })
    const add = ()=>{
        count.value++;
    }
    const isAdmin = ref(true)
    const username = ref('Joyce')
    const onepiece = ref('/src/assets/onepiece.jpg')
     
</script>

<template>
    <div>
        <h2>{{ message }} 執行中</h2>
        <p>{{ `User Name ${user.firstName} ${user.lastName}` }}</p>
        <input style="text" v-model="message"/><br/>
        <button @click="add">{{ count }}</button>
        <p>{{isAdmin &&'管理員登入'  }}</p>
        <p>{{ username || '訪客'}}</p>
        <img :src="onepiece" title="123"/>
    </div>
</template>

<style lang="css" scoped>

</style>