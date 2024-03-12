<script setup>

const props = defineProps({
    showModal: Boolean,
})

const emit = defineEmits();

const hideDialog = () => {
    emit('Update:showModal', false);
}
</script>


<template>
    <div class="my-modal d-flex align-items-center justify-content-center" v-if="showModal">
        <div class="my-modal__content d-flex align-items-center justify-content-center">
            <button class="my-modal__btn btn btn-warning btn-lg" @click="hideDialog">
                <img src="/close.png" alt="">
            </button>
        </div>
    </div>
</template>


<style scoped>
.my-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.062);
}

.my-modal__content {
    width: 300px;
    height: 300px;
    background-color: #ddd;
}
</style>