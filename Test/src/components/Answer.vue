<script setup>

const props = defineProps({
    image: String,
})
</script>

<template>
    <div class="answer d-flex align-items-center overflow-hidden">
        <div class="container">
            <div class="answer-img d-flex justify-content-center">
                <img :src="image">
            </div>
        </div>
    </div>
</template>

<style scoped>
.answer {
    min-height: 70vh;
}

.answer-img img {
    width: 100%;
    height: auto;

}

@media(max-width: 767px) {
    .answer {
        padding-top: 60px;
        min-height: 49.8vh;
        flex-direction: column;
    }

    .answer-img img {
        width: 140%;
    }
}
</style>