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
        <footer>
    <div class="firstContainer container">
      <img src="../assets/ecocampus2.svg" alt="Logo" id="logo" />
    </div>
    <div class="secondContainer container">
      <span>ECOCAMPUS, Inc. © 2023</span>
      <p>
        A <span class="bold">ECOCAMPUS</span> é um projeto da
        <span class="bold">Escola Superior de Media Artes e Design</span>
        do
        <span class="bold">Instituto Politécnico do Porto</span>
      </p>
    </div>
    <div class="thirdContainer container">
      <router-link to="#">Privacidade</router-link>
      <router-link to="#">Termos de Utilização</router-link>
      <router-link to="#">Contactos</router-link>
    </div>
    <div class="forthContainer container">
      <img src="../assets/instagram-svgrepo-com.svg" alt="" class="social" />
      <img src="../assets/facebook-svgrepo-com.svg" alt="" class="social" />
      <img src="../assets/tiktok-svgrepo-com.svg" alt="" class="social" />
      <img src="../assets/twitter-svgrepo-com.svg" alt="" class="social" />
    </div>
  </footer>
    </div>

</template>

<style scoped>
footer {
  font-family: "Gilroy", sans-serif;
  background-color: white;
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-columns: minmax(80px, 8%) 300px auto 430px;
}

.container {
  display: flex;
}

.firstContainer {
  height: 120px;
  position: absolute;
  grid-column: 1/2;
}

#logo {
  width: 85px;
  position: relative;
  left: -12px;
}

.secondContainer {
  grid-column: 2/3;
  color: black;
  flex-direction: column;
  justify-content: center;
}

.secondContainer span {
  font-weight: 1000;
  font-size: 9px;
}

.secondContainer p {
  font-weight: 700;
  font-size: 9px;
  color: black;
  max-width: 180px;
  margin-bottom: 0;
}

.bold {
  font-weight: 700 !important;
  color: #212020;
  font-weight: bold;
}

.thirdContainer {
  align-items: center;
  justify-content: center;
}

a {
  color: black;
  font-family: "Gilroy", sans-serif;
  text-decoration: none;
  font-weight: 700;
  font-size: 10px;
  padding: 0 20px;
}

.forthContainer {
  align-items: flex-end;
}

.social {
  width: 50px;
  padding: 0 10px;
}
</style>
