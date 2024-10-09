// Ví dụ: Login.vue
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function login() {
  // Mô phỏng quá trình đăng nhập (thay bằng logic đăng nhập thực của bạn)
  const isLoggedIn = true

  if (isLoggedIn) {
    const lastVisitedURL = localStorage.getItem('lastVisitedURL')
    if (lastVisitedURL) {
      router.push(lastVisitedURL)
    } else {
      router.push('/')
    }
  }
}
</script>

<template>
  <button @click="login">Đăng nhập</button>
</template>
