<template>
    <main class="main" :class="{padTop: props.pad}">
        <slot></slot>
    </main>
</template>
<script setup lang='ts'>
const props = withDefaults(defineProps<{
    pad?: boolean,
}>(), {
    pad: false
})
</script>
<style lang="scss" scoped>
.main {
    width: 100%;
    position: relative;
    display: block;
    padding: 0 14%;
    background-color: white;
    z-index: 1;
    // padding-top: 80px;

    box-sizing: border-box;
    @media (max-width: 700px) {
        padding: 24px;
        padding-bottom: 0px;
    }

    &.padTop {
        padding-top: 60px;
        @media (max-width: 700px) {
            padding-top: 24px;
        }
    }
}
</style>