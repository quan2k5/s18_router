<script setup>
import {ref} from  'vue';
import {useRouter} from"vue-router";
const router=useRouter();
const value=ref('');
const handleClick=()=>{
    router.push({path:"/search",query:{product:value.value}})
}
</script>
<template>
    <div>
        <input type="text" v-model="value">
        <button @click="handleClick">Click</button>
    </div>
</template>