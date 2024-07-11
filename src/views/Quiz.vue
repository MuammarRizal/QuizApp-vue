<script setup>
import QuizHeader from "@/components/QuizHeader.vue";
import QuizContent from "@/components/QuizContent.vue";
import QuizResult from "@/components/QuisResult.vue";
import { useRoute } from "vue-router";
import quizes from "@/data/quizes.json";
import { computed, ref } from "vue";

const quizId = parseInt(useRoute().params.id);
const quiz = quizes.find((item) => item.id === quizId);
const numberOfCorrectAnswer = ref(0);
const showResult = ref(false);

const currentQuizIndex = ref(0);
const questionPage = computed(() => {
  return `${currentQuizIndex.value + 1} / ${quiz.questions.length}`;
});

const barPercentage = computed(() => {
  return `${((currentQuizIndex.value + 1) / quiz.questions.length) * 100}%`;
});

function onSelectOption(option) {
  if (option.correct) {
    numberOfCorrectAnswer.value++;
  }

  if (currentQuizIndex.value === quiz.questions.length - 1) {
    showResult.value = true;
    return;
  }

  currentQuizIndex.value++;
}
</script>

<template>
  <QuizHeader :questionPage="questionPage" :barPercentage="barPercentage" />
  <QuizContent
    :question="quiz.questions[currentQuizIndex]"
    :currentIndex="currentQuizIndex"
    v-if="!showResult"
    @selectOption="onSelectOption"
  />

  <QuizResult
    v-else
    :quizLength="quiz.questions.length"
    :correctAnswer="numberOfCorrectAnswer"
  />

  <!-- <div class="button-group">
    <button
      @click="currentQuizIndex--"
      class="btn btn-decrease"
      :disabled="currentQuizIndex <= 0"
    >
      Sebelumnya
    </button>
    <button
      @click="currentQuizIndex++"
      class="btn btn-increase"
      :disabled="currentQuizIndex === quiz.questions.length - 1"
    >
      Selanjutnya
    </button>
  </div> -->
</template>

<style scoped>
.button-group {
  display: flex;
  justify-content: space-between;
}

.btn-decrease {
  background-color: greenyellow;
}
.btn-increase {
  background-color: gray;
}
</style>
