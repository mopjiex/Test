<script setup>
import { ref } from 'vue';

const props = defineProps({
    Answers: Object
});
const selectedOption = defineModel('selectedOption');

const emit = defineEmits(['checkWin']);

const a = () => {
    emit('checkWin');
}
</script>


<template>
    <footer class="footer p-3">
        <div class="footer-content row align-items-center text-center">
            <div class="col" v-for="answer in Answers.answer_options" :key="answer.id">
                <input v-model="selectedOption" type="radio" class="btn-check" name="answer" :value="answer.value"
                    :id="answer.value" autocomplete="off">
                <label class="footer-label btn btn-outline-secondary" :for="answer.value">{{ answer.option }}</label>
            </div>
            <div class="col">
                <button class="footer-btn btn btn-primary" @click="a">Check</button>
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
    width: 50%;
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