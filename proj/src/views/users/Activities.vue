<script>

// import { useAuthStore } from "./auth.store";
// import { useActStore } from "../../stores/act.store";

export default {
  data() {
    return {
      items: [
        { id: 1, name: "Atividade 1", description: "Limpar as ruas" },
        { id: 2, name: "Atividade 2", description: "Limpar as florestas" },
        { id: 3, name: "Atividade 3", description: "Fazer reciclagem" },
        { id: 4 , name: "Atividade 4", description: "Poster Eco-Código" },  
      ],
    };
  },
};
</script>

<!-- fazer form  -->

<template>
  <div class="container1">
    <div class="container2">
        <h2 class="headerContainer2">Increve-te nas atividades!</h2>
          <span class="span1">
            Nesta pagina podes increver nas atividades listadas ou se tiveres boas sugestões para atividades que possam ser introduzidas no futuro também podes indicar a tua ideia. 
          </span> 
      </div> 
    <div class="activitiesWrapper">
      <div class="cardsGrid">
        <div v-for="item in items" :key="item.id">
          <div class="activityCard">
            <div class="activityTitle">
              {{ item.name }}
            </div>
            <div class="activityDescription">
              {{ item.description }}
            </div>
            <div>
              <button class="actButton">Increve-te</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div>
      <h5>Indica aqui a tua ideia num texto breve</h5>
      <textarea name="ideia" id="ideia" cols="40" rows="4"></textarea>
    </div>
  </div>
  <!-- footer -->
  <footer>
        <div class="firstContainer container">
            <img src="../../assets/ecocampus2.svg" alt="Logo" id="logo" />
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
                <router-link class="aa" to="#">Privacidade</router-link>
                <router-link class="aa" to="#">Termos de Utilização</router-link>
                <router-link class="aa" to="#">Contactos</router-link>
            </div>
            <div class="forthContainer container">
                <img src="../../assets/instagram-svgrepo-com.svg" alt="" class="social" />
                <img src="../../assets/facebook-svgrepo-com.svg" alt="" class="social" />
                <img src="../../assets/tiktok-svgrepo-com.svg" alt="" class="social" />
                <img src="../../assets/twitter-svgrepo-com.svg" alt="" class="social" />
            </div>
    </footer>
  
</template>

<style>
.container1 {
  background-color: white;
}
.actButton {
  background-color: white;
  font-weight: bold;
  margin-top: 3%;
}

.cardsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
}
.activitiesWrapper {
  margin-top: 3%;
}
.activityCard {
  margin-top: 3%;
  color: black;
  text-align: center;
  
}

.activityTitle {
  font-weight: bold;
}

.activityDescription {
  margin-top: 1.5%;
}
</style>
