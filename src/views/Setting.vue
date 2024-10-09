<template>
<div>
     <h3>FORM</h3>
  <input v-model="unsavedChanges" placeholder="Nhập thông tin..." />
</div>
</template>

<script setup>
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

const unsavedChanges = ref('')
onBeforeRouteLeave((to, from, next) => {
  if (unsavedChanges.value) {
    const answer = window.confirm("Bạn có chắc muốn rời đi mà không lưu?");
    if (!answer) {
      next(false);  
    } else {
      next(); 
    }
  } else {
    next(); 
  }
});
</script>

<style scoped>
</style>
