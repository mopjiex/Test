<script setup>

const props = defineProps({
    showModal: Boolean,
})

const emit = defineEmits();

const hideDialog = () => {
    console.log(1)
    emit('Update:showModal', false);
}
</script>


<template>
    <div class="modal flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-5 bg-[#00000010]"
        v-if="showModal">
        <div class="modal-content flex items-center justify-center w-[300px] h-[300px] bg-white">
            <button class="modal-btn p-5 bg-zinc-300 transition-colors duration-300 hover:bg-zinc-500"
                @click="hideDialog">
                <img src="/close.png">
            </button>
        </div>
    </div>
</template>


<style scoped></style>