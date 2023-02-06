<script>
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
  </div>
  
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
