<script setup>
import { computed, ref, watch, watchEffect } from 'vue';

    const username = ref('')
    const submitHandler = () =>{
        if(username.value.length ===0){
            alert('清先輸入姓名');
            return; 
        }
        alert(`資料送出：${username.value}`);
    }
    const school = ref('')
    const height = ref(0)
    const weight = ref(0)
    const BMI = computed(()=>
        (weight.value/(height.value/100)**2).toFixed(2)
    )
    
    const formatTime = (today)=>{
        const hour = today.getHours().toString().padStart(2,'0');
        const min = today.getMinutes().toString().padStart(2,'0');
        const second = today.getSeconds().toString().padStart(2,'0');
        return `${hour}:${min}:${second}`;
    }
    const clock = ref(formatTime(new Date()))
    const changeTime = ()=>{
        const today = new Date();
        clock.value = formatTime(today);
    }
    watch(clock, (newTime, oldTime)=>{
        console.log(`clock change from ${oldTime} to ${newTime}`);
        
    }, {immediate: true});
    watchEffect(()=>{
        console.log(`Current time ${clock.value}`);
    });
</script>

<template>
    <div>
        <form action="/do" v-on:submit.prevent="submitHandler">
            <label for="name">姓名：</label>
            <input type="text" name="name" v-model.lazy.trim="username"/>

            <button type="submit">送出</button>

        </form>
        <select v-model="school">
            <option value="university">大學</option>
            <option value="highschool">高中</option>
            <option value="juniorschool">中學</option>
            <option value="elemantary">小學</option>
        </select>
        <p>{{ school }}</p>

        <label>身高：<input type="number" name="height" v-model.lazy.number="height"/></label>
        <label>體重：<input type="number" name="weight" v-model.number.lazy="weight"/></label>
        <p>BMI:{{ BMI }}</p>
        <button @click="changeTime">更新時間</button>
        <h2>{{ clock }}</h2>
        
    </div>
</template>

<style lang="css" scoped>

</style>