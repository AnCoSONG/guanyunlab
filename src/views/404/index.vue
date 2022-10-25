<template>
    <div class="not-found">
        <div class="not-found-text">404 Not Found</div>
        <div class="btn" @click="router.push('/')">Back To Home</div>
    </div>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
<style lang="scss" scoped>
.not-found {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .not-found-text {
        font-size: 24px;
        line-height: 1.5;
        margin-bottom: 24px;
    }

    .btn {
        width: 200px;
        height: 40px;
        border: 1px solid #141414;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
}
</style>