<script setup>
import axios from 'axios';
import { onMounted, ref, computed } from 'vue';
import { useFetchStore } from '@/store/store.js';
import myHeader from '@/components/Header.vue';
import myAnswer from '@/components/Answer.vue';
import myFooter from '@/components/Footer.vue';

const store = useFetchStore();
const selectedAnswer = ref('A');

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

    <div class="" v-else>
        <myHeader :task="answerTask" :condition="answerConditions" />
        <myAnswer :image="answerImage" />
        <myFooter :options="answerOptions" @answerChecked="checkCorrectAnswer"
            v-model:selectedAnswer="selectedAnswer" />
    </div>

</template>

<style scoped></style>
