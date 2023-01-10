<template>
    <div class="section-title">
        <MainTitle type="large" :en="cn" :cn="en"></MainTitle>
    </div>
</template>
<script setup lang='ts'>
import MainTitle from './MainTitle.vue';

defineProps<{en: string, cn: string}>()
</script>
<style lang="scss" scoped>
.section-title {
    width: 100%;
    position: relative;
    display: block;
    padding: 0 14%;
    margin-top: 100px;
    margin-bottom: 40px;

    box-sizing: border-box;
    @media (max-width: 700px) {
        padding: 0px 24px;
        margin-top: 13px;
        margin-bottom: 0px;
    }
}
</style>