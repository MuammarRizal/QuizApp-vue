<script setup>
import { useRouter } from "vue-router";

const { quiz } = defineProps(["quiz"]);

const router = useRouter();

function goToQuiz() {
  router.push({ name: "quiz", params: { id: quiz.id } });
}
</script>

<template>
  <div class="card" style="width: 16rem">
    <img :src="quiz.img" class="card-img-top img-quiz" :alt="quiz.title" />

    <div class="card-body">
      <h5 class="card-title">{{ quiz.title }}</h5>
      <p class="card-text">
        {{ quiz.description }}
      </p>
      <p>{{ quiz.questions.length }} Questions</p>
      <button @click="goToQuiz" class="btn btn-primary">Quiz</button>
    </div>
  </div>
</template>

<style scoped>
.img-quiz {
  height: 150px;
}
</style>
