<script setup>
const props = defineProps({
    src: String,
})

const emit = defineEmits(['btnClick']);

const btnClick = () => {
    emit('btnClick');
}

</script>

<template>
    <button class="btn bg-[#f5dce3] p-2 rounded-lg border-b-4 border-[#f5dce3] transition-all
              duration-300 hover:bg-[#c4b0b6] hover:border-[#252223]" @click="btnClick">
        <img :src="src" class="btn-img">
    </button>

</template>

<style scoped></style>
