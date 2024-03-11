<script setup>
import { ref } from 'vue';
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
    <div class="header pt-1">
        <div class="container">
            <div class="header-content row">
                <div class="header-left col-md-2 col-sm-12 align-self-end">
                    <button class="header-btn btn btn-light">
                        <img src="/close.png">
                    </button>
                </div>
                <div class="header-mid col-md-8 col-sm-12 text-center align-self-end">
                    <p class="text fs-3 m-0">
                        {{ condition }}
                    </p>
                </div>
                <div class="header-right col-md-2 col-sm-12 text-end">
                    <p class="mb-5">
                        <span class="name">Anton</span>
                        <span class="point d-flex justify-content-end align-items-center">
                            1000 <img src="/coin.png" class="img-point">
                        </span>
                    </p>
                    <button class="header-btn btn btn-light" @click="openModal">
                        <img src="/bulb.png">
                    </button>
                </div>
            </div>
            <div class="row">
                <h2 class="text-center">{{ task }}</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    min-height: 20vh;
}

.header-btn {
    -webkit-box-shadow: 3px 4px 9px 1px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 3px 4px 9px 1px rgba(0, 0, 0, 0.57);
    box-shadow: 3px 4px 9px 1px rgba(0, 0, 0, 0.57);
}

.btn-img,
.img-point {
    width: 15px;
    height: 15px;
}

@media(max-width: 767px) {
    .header-left {
        position: relative;
        top: -41px;
        z-index: 1;
    }

    .header-right {
        position: relative;
        order: -1;
        z-index: 2;
    }


}
</style>