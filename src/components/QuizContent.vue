<script setup>
import { defineProps } from "vue";

const emit = defineEmits(["selectOption"]);
const { question } = defineProps(["question"]);

function emitSelectedOption(option) {
  emit("selectOption", option);
}
</script>
<template>
  <section id="question-container">
    <h4 class="question-tittle">{{ question.text }}</h4>
  </section>

  <section id="options-container">
    <div
      class="option"
      v-for="option in question.answer"
      :key="option.id"
      @click="emitSelectedOption(option)"
    >
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">{{ option.text }}</div>
    </div>
  </section>
</template>

<style scoped>
#question-container {
  margin-block: 30px;
}

.option {
  display: flex;
}

.option-label,
.option-value {
  height: 50px;
  width: 50px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.option-label {
  background-color: red;
}

.option-value {
  background-color: aqua;
  justify-content: flex-start;
  padding-left: 30px;
  width: 100%;
}
</style>
