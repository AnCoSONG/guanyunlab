<template>
    <div class="infobox">
        <ZeroFiveLine></ZeroFiveLine>
        <div class="content">
            <slot></slot>
        </div>
        <ZeroFiveLine v-if="last"></ZeroFiveLine>
    </div>
</template>
<script setup lang='ts'>
import ZeroFiveLine from './ZeroFiveLine.vue';
// import ZeroFiveLine from './ZeroFiveLine.vue';
defineProps<{last?: boolean}>()
</script>
<style lang="scss" scoped>
.infobox {
    position: relative;
    width: 100%;
    // border-top: 1px solid #14141488;

    .content {
        padding: 20px 0px;
        box-sizing: border-box;
    }
    &:last-child {
        // border-bottom: 1px solid #14141488;
    }
}
</style>