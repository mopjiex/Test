<script setup>
const rValue = defineModel('rValue');
const emit = defineEmits();

const a = () => {
    emit('t');
}
</script>

<template>
    <input type="radio" class="" name="test" value="1" v-model="rValue">
    <input type="radio" class="" name="test" value="2" v-model="rValue">
    <input type="radio" class="" name="test" value="3" v-model="rValue">
    <button class="btn" @click="a">Тест</button>
</template>