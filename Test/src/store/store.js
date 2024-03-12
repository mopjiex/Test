import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
export const useFetchStore = defineStore('fetch', () => {

    const answer = ref([]);
    const isLoading = ref(true);

    const useFetch = async () => {
        try {
            isLoading.value = true;
            const { data } = await axios.get('/answer.json');
            answer.value = data;
            console.log(answer)
        } catch (e) {
            console.log(e)
        } finally {
            isLoading.value = false;
        }

    }
    return { answer, isLoading, useFetch };
})