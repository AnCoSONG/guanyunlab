<template>
    <div class="text-btn" :class="{active: actived}">
        {{text.toUpperCase()}}
    </div>
</template>
<script setup lang='ts'>
defineProps<{
    text: string,
    actived?: boolean
}>()

</script>
<style lang="scss" scoped>
.text-btn {
    position: relative;
    padding: 0px 2px;
    box-sizing: border-box;

    &:hover {
        color: #aaa;
        cursor: pointer;
    }
}
</style>