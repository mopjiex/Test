<script setup>
import { onMounted, ref, computed } from 'vue';
import myHeader from '@/components/Header.vue';
import myAnswer from '@/components/Answer.vue';
import myFooter from '@/components/Footer.vue';

import { useFetchStore } from '@/store/store.js';

const selectedAnswer = ref('A')

const store = useFetchStore();

const answerTask = computed(() => store.answer.task_text);
const answerConditions = computed(() => store.answer.task_conditions);
const answerImage = computed(() => store.answer.task_image);
const answerCorrect = computed(() => store.answer.correct_answer);
const answerOptions = computed(() => store.answer.answer_options)


const checkCorrectAnswer = () => {
  if (answerCorrect.value === selectedAnswer.value) {
    alert('Верно');
  }
  else alert('Неверно');
  selectedAnswer.value = 'A';
}

onMounted(store.useFetch);
</script>

<template>
  <div class="loading" v-if="store.isLoading">Загрузка</div>
  <div class="app min-h-screen bg-center bg-no-repeat bg-cover flex flex-col justify-between" v-else>
    <myHeader :task="answerTask" :condition="answerConditions" />
    <myAnswer :image="answerImage" />
    <myFooter v-model:selectedOption="selectedAnswer" :options="answerOptions" @answerChecked="checkCorrectAnswer" />
  </div>
</template>

<style scoped></style>
