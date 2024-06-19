<script setup>

import HomeView from "@/views/HomeView.vue";
</script>

<template>
<nav class="main-nav">
  <router-link :to="{name: 'home'}">Project</router-link>
  <router-link :to="{name: 'create.project'}">Add New Project</router-link>
</nav>
</template>

<style scoped>
.main-nav{
  text-align: center;
  margin: 40px auto;
}

.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
}

a.router-link-exact-active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
</style>