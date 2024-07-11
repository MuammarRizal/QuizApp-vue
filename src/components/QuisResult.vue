<script setup>
import { defineProps } from "vue";
const { quizLength, correctAnswer } = defineProps([
  "quizLength",
  "correctAnswer",
]);
</script>

<template>
  <section class="result">
    <h4>Correct : {{ correctAnswer }}</h4>
    <h4>Wrong : {{ quizLength - correctAnswer }}</h4>
    <h3>Score : {{ (correctAnswer / quizLength) * 100 }}</h3>
    <RouterLink to="/">Go Back</RouterLink>
  </section>
</template>
