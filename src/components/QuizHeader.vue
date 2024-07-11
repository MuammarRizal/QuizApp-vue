<script setup>
import { defineProps } from "vue";
const { questionPage, barPercentage } = defineProps([
  "questionPage",
  "barPercentage",
]);
</script>

<template>
  <header>
    <h2 class="question">Questions {{ questionPage }}</h2>
    <div class="bar">
      <div class="bar-progress" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<style scoped>
.question {
  font-size: 2.2rem;
  margin-bottom: 25px;
}

.bar {
  width: 100%;
  height: 50px;
  border: 2px solid black;
}

.bar-progress {
  width: 30%;
  height: 45px;
  background-color: blue;
}
</style>
