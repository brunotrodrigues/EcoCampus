<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Item 1", description: "This is item 1" },
        { id: 2, name: "Item 2", description: "This is item 2" },
        { id: 3, name: "Item 3", description: "This is item 3" },
      ],
    };
  },
};
</script>

<template>
  <div class="activitiesWrapper">
    <div class="cardsGrid">
      <div v-for="item in items" :key="item.id">
        <div class="activityCard">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.cardsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
}

.activityCard {
  background-color: blue;
}
</style>
