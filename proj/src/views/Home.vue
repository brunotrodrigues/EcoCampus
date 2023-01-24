<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
    <!-- <div v-if="user">
        <h1>Bem-vindo {{user.firstName}}!</h1>
        <p><router-link to="/users">Manage Users</router-link></p>
    </div> -->
    <div>
        <h1></h1>
        <p>Esta aplicação tem como principal objetivo apoiar os alunos envolvidos no projeto eco-escolas.</p>
        <p>Pretendemos elucidar os alunos a participarem em atividades, fazer registo de
        problemas associados ao ambiente e proporcionar um melhor estilo de vida no que toca à
        poupança e conservação do ambiente.</p>
    </div>

</template>
