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

        <div>
            <h2>O que é o programa Eco-Escolas?</h2>
            <p>Eco-Escolas é um programa internacional da “Foundation for Environmental Education”, desenvolvido em Portugal desde 1996 pela ABAE. Pretende encorajar ações e reconhecer o trabalho de qualidade desenvolvido pela escola, no âmbito da Educação Ambiental para a Sustentabilidade.
O programa é coordenado a nível internacional, nacional, regional e de escola. Esta coordenação multinível permite a confluência para objetivos, metodologias e critérios comuns que respeitam a especificidade de cada escola relativamente aos seus alunos e caraterísticas do meio envolvente.</p>
        </div>

        <div>
            <h2>Parceiros</h2>
            <p>Alguns parceiros deste projeto</p>
        </div>

        <!-- footer -->
    </div>

</template>
