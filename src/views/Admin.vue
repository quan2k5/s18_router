<template>
    <div>
  <div class="nav">
     <RouterLink exact-active-class="active" to="/admin">ADMIN</RouterLink>
     <RouterLink exact-active-class="active" to="/admin/users">User</RouterLink>
     <RouterLink exact-active-class="active" to="/admin/product">Product</RouterLink>
     <RouterLink exact-active-class="active" to="/admin/setting">Setting</RouterLink>
  </div>
  <p>Dashboard</p>
  <router-view></router-view>
</div>
</template>

<script setup>

</script>

<style scoped>
.nav{
    display: flex;
    gap: 20px;
}
.active{
    background-color: red;
    color: white;
    padding: 5px;
    border-radius: 5px;
}

</style>