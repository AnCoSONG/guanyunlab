<template>
    <div class="infobox">
        <ZeroFiveLine></ZeroFiveLine>
        <div class="content" :style="{'padding': props.padding + 'px 0px'}">
            <slot></slot>
        </div>
        <ZeroFiveLine v-if="last" :scale="0.5"></ZeroFiveLine>
    </div>
</template>
<script setup lang='ts'>
import ZeroFiveLine from './ZeroFiveLine.vue';
// import ZeroFiveLine from './ZeroFiveLine.vue';
const props = withDefaults(
    defineProps<{last?: boolean, padding?: number}>(), {
        last: false,
        padding: 20
    }
)
</script>
<style lang="scss" scoped>
.infobox {
    position: relative;
    width: 100%;
    // border-top: 1px solid #14141488;

    .content {
        // padding: 20px 0px;
        box-sizing: border-box;

        @media (max-width: 700px) {
            padding: 16px 0px;
        }
    }
    &:last-child {
        // border-bottom: 1px solid #14141488;
    }
}
</style>