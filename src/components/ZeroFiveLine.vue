<template>
    <div class="zero-five-line">
    </div>
</template>
<script setup lang='ts'>

</script>
<style lang="scss" scoped>
.zero-five-line {
    width: 100%;
    position: relative;
    height: 1px;
    // line-height: 1px;
    // margin: 1px 0px;

    &::after {
        // content: '';
        // position: absolute;
        // width: 200%;
        // height: 200%;
        // top: 0;
        // left: 0;
        // transform-origin: 0 0;
        // border-width: 1px;
        // border-style: solid;
        // transform: scale(0.5, 0.5);
        // border-radius: 1px;
        // box-sizing: border-box;
        // pointer-events: none;
        // border-width: 0px;
        // border-top-width: 1px;
        // border-bottom-width: 1px;

        // content: '';
        // display: block;
        // width: 100%;
        // height: 1px;
        // position: absolute;
        // left: 0;
        // bottom: 0;
        // background: black;
        // transform: scaleY(1);
        // transform-origin: 0 0;
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: black;
        // background: #0000008f;
        transform: scaleY(0.5);
    }
}
</style>