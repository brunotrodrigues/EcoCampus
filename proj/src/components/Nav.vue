<script setup>
import { useAuthStore } from "@/stores";

const authStore = useAuthStore();
</script>

<template>
  <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark">
    <div>
      <img class="logo" src="../assets/ECOCAMPUS3.svg" alt="">
    </div>
    <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/activities" class="nav-item nav-link">Atividades</router-link>
        <router-link to="/questions" class="nav-item nav-link">Questionários</router-link>
        <router-link to="/users" class="nav-item nav-link">AdminUsers</router-link>
        <router-link to="/editProfile" class="nav-item nav-link">Perfil</router-link>
        <button @click="authStore.logout()" class="btn btn-link nav-item nav-link">Logout</button>

    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: black;
}
.navbar-nav{
  margin-left: 48%;
}


</style>
