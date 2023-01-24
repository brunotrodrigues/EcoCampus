<script setup>
import { useAuthStore } from "@/stores";

const authStore = useAuthStore();
</script>

<template>
  <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark">
    <div class="navbar-nav">
      <router-link to="/" class="nav-item nav-link">Home</router-link>
      <router-link to="/activities" class="nav-item nav-link">Atividades</router-link>
      <router-link to="/questions" class="nav-item nav-link">Questionarios</router-link>
      <router-link to="/users" class="nav-item nav-link">Perfil</router-link>
      <button @click="authStore.logout()" class="btn btn-link nav-item nav-link">
        Logout
      </button>
    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: rgb(77, 187, 110);
}
</style>
