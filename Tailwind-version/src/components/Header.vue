<script setup>
import { ref } from 'vue';
import myBtn from '@/components/UI/Button.vue';
import myModal from '@/components/Modal.vue';
const props = defineProps({
    task: String,
    condition: String,
})

const showModal = ref(false);

const openModal = () => {
    showModal.value = true;
}

</script>


<template>
    <myModal v-model:showModal="showModal" />
    <header class="header pt-5">
        <div class="container mx-auto px-2">
            <div class="header-content flex justify-between mb-4 max-sm:grid max-sm:grid-cols-2 max-sm:gap-5">
                <div class="header-left self-end">
                    <myBtn :src="`/close.png`" />
                </div>

                <div class="header-mid self-end max-sm:order-1 max-sm:col-span-2 max-sm:text-center">
                    <p class="header-text text-xl">{{ condition }}</p>
                </div>

                <div class="header-right max-sm:flex max-sm:flex-col max-sm:items-end">
                    <p class="header-name">Anton</p>
                    <p class="header-coin flex items-center gap-1 mb-10">
                        1000 <img src="/coin.png" class="coin-img">
                    </p>
                    <div class="text-right">
                        <myBtn :src="`/bulb.png`" @btnClick="openModal" />
                    </div>
                </div>
            </div>
            <h2 class="header-answer text-2xl text-center">{{ task }}</h2>
        </div>
    </header>
</template>