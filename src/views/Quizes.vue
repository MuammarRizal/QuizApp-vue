<script setup>
import { ref, watch } from "vue";
import QuizCard from "../components/QuizCard.vue";
import srcQuiz from "../data/quizes.json";
const quizes = ref(srcQuiz);
const searchVal = ref("");

watch(searchVal, () => {
  quizes.value = srcQuiz.filter((item) => {
    return item.title.toLowerCase().includes(searchVal.value.toLowerCase());
  });
  return;
});
</script>

<template>
  <div class="tittle__quiz">
    <div class="input-group mb-3 w-50">
      <h3 class="me-3">Quiz App</h3>
      <input
        type="text"
        class="form-control"
        v-model.trim="searchVal"
        placeholder="Search"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  </div>
  <section id="cards" class="cards-quiz d-flex gap-3 flex-wrap">
    <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
  </section>
</template>
