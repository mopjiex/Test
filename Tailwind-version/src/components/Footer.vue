<script setup>
import { ref } from 'vue';
const props = defineProps({
    options: Array,
})
const selectedOption = defineModel('selectedOption');
const emit = defineEmits(['answerChecked']);
const checkAnswer = () => {
    emit('answerChecked');
}

</script>

<template>
    <footer class="footer">
        <div class="footer-content bg-[#dcdce1] p-10">
            <div class="footer-inputs flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-2">
                <label class="inline-flex items-center py-2 px-5 w-[25%] justify-center bg-[#f4f5fd] rounded-md
          max-sm:w-[90%]"
                    :class="{ 'font-bold': selectedOption === option.option, 'bg-[#ababbd]': selectedOption === option.option }"
                    v-for="option in options" :key="option.id" :for="option.value">
                    <input v-model="selectedOption" type="radio" class="form-radio hidden" name="answer"
                        :value="option.value" :id="option.value">
                    {{ option.option }}
                </label>

                <button
                    class="footer-check py-2 px-5 bg-[#e7eaf3] w-[15%] rounded-md  transition-colors duration-300 hover:bg-[#9b9fa8] max-sm:w-[60%]"
                    @click="checkAnswer">Check</button>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>