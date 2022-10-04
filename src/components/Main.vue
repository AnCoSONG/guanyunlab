<template>
    <main class="main">
        <slot></slot>
    </main>
</template>
<script setup lang='ts'>

</script>
<style lang="scss" scoped>
.main {
    width: 100%;
    position: relative;
    display: block;
    padding: 0 14%;

    box-sizing: border-box;
    @media (max-width: 700px) {
        padding: 24px;
    }
}
</style>