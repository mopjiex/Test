<script setup>
import axios from 'axios';
import { onMounted, ref, watch, computed } from 'vue';
import { useFetchStore } from '@/store/store.js';
import myHeader from '@/components/Header.vue';
import myAnswer from '@/components/Answer.vue';
import myFooter from '@/components/Footer.vue';

const store = useFetchStore();
const selectedOption = ref('A');

const answer = computed(() => store.answer[0]);
const answerTask = computed(() => store.answer[0].task_text);
const answerConditions = computed(() => store.answer[0].task_conditions);
const answerImage = computed(() => store.answer[0].task_image);
const answerCorrect = computed(() => store.answer[0].correct_answer);

const checkCorrectAnswer = () => {
    if (answerCorrect.value === selectedOption.value) {
        alert('Верно');
    }
    else alert('Не верно');
    selectedOption.value = 'A';
}


onMounted(store.useFetch);

</script>

<template>

    <div class="loading" v-if="store.isLoading"></div>

    <div class="a" v-else>
        <myHeader :task="answerTask" :condition="answerConditions" />
        <myAnswer :image="answerImage" />
        <myFooter :Answers="answer" @checkWin="checkCorrectAnswer" v-model:selectedOption="selectedOption" />
    </div>

</template>

<style scoped></style>
