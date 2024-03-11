<script setup>
import { ref } from 'vue';

const props = defineProps({
    options: Array,
});

const selectedAnswer = defineModel('selectedAnswer');
const emit = defineEmits(['answerChecked']);

const checkAnswer = () => {
    emit('answerChecked');
}
</script>


<template>
    <footer class="footer p-3">
        <div class="footer-content row align-items-center text-center">
            <div class="col" v-for="option in  options" :key="option.id">
                <input v-model="selectedAnswer" type="radio" class="btn-check" name="answer" :value="option.value"
                    :id="option.value" autocomplete="off">
                <label class="footer-label btn btn-outline-secondary" :for="option.value">{{ option.option }}</label>
            </div>
            <div class="col">
                <button class="footer-btn btn btn-primary" @click="checkAnswer">Check</button>
            </div>

        </div>
    </footer>
</template>

<style scoped>
.footer {
    min-height: 10vh;
    background-color: #dcdce1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.footer-label {
    width: 100%;
}

.footer-btn {
    width: 70%;
}

.form-check-label {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 4px;
}

@media(max-width: 767px) {
    .footer-content {
        flex-direction: column;
        gap: 10px 0;
    }
}
</style>