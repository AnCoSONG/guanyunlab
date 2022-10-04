<template>
    <div class="keywords">
        <span v-for="item, index in keywords" :key="item" class="keyword">
            {{item}} {{index == keywords.length - 1 ? "": " | "}}
        </span>
    </div>
</template>
<script setup lang='ts'>
defineProps<{keywords: string[]}>()
</script>
<style lang="scss" scoped>
.keywords {
    width: 100%;
    position: relative;
    font-size: 12px;
    color: #4C4C4C;

    .keyword {
        display: inline;
        // word-break: break-all;
    }
}
</style>