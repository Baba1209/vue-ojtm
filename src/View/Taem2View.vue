<script setup>
    import { ref } from 'vue';
    const regions = ref([
    { "code": "100", "name": "中正區" },
    { "code": "103", "name": "大同區" },
    { "code": "104", "name": "中山區" },
    { "code": "106", "name": "大安區" }
    ])
    const bgColor = ref('')
</script>

<template>
    <div>
        <h2>Page2</h2>
        <select v-model="selectedRegion">
            <option value="">請選擇</option>
            <!--region 表示 { "code": "100", "name": "中正區" }-->
            <option v-for="(region, idx) in regions" :key="region.code" :value="region">{{ idx }}-{{ region.name }}
            </option>
        </select>
        <br/>
        <input type="color" v-model="bgColor"/>
        <div style="width:200px;height:200px;border:1px solid green" :style="{ backgroundColor: bgColor }"></div>
    </div>
</template>

<style lang="css" scoped>

</style>