<script setup>

const props = defineProps({
    image: String,
})

</script>

<template>
    <div class="answer">
        <div class="container mx-auto px-2">
            <div class="asnwer-content flex justify-center">
                <img class="answer-img" :src="image">
            </div>
        </div>
    </div>
</template>

<style scoped></style>