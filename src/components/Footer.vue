<template>
    <footer class="global-footer" :class="{zeroPadTop: listFooter}">
        <zero-five-line/>
        <div class="main-footer">
            <div class="text">
                Copyright &copy; 浙江大学智慧形态实验室 / Guanyun Lab, Zhejiang University, All rights reserved.
            </div>
            <!-- <img class="logo" src="https://dummyimage.com/48x48/141414/f5f5f5&text=logo"/> -->
        </div>
    </footer>
</template>
<script setup lang='ts'>
import ZeroFiveLine from './ZeroFiveLine.vue';
withDefaults(defineProps<{
    listFooter?: boolean
}>(), {
    listFooter: false
})

</script>
<style lang="scss" scoped>
.global-footer {

    &.zeroPadTop {
        padding-top: 0px !important;
    }
    position: relative;
    width:100%;
    padding: 14%;
    padding-top: 40px;
    padding-bottom: 60px;
    box-sizing: border-box;
    z-index: 1;
    background-color: white;
    @media (max-width: 700px) {
        padding: 16px;
    }
    .main-footer {
        // background-color: red;
        // border-top: 1px solid $fgcolor;
        // padding-top: 2px;
        box-sizing: border-box;
        position: relative;
        // font-size: 14px;
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 800px) {
            flex-flow: nowrap column;
            align-items: flex-start;
            
            .text {
                margin-bottom: 12px;
            }
        }

        .text {
            font-size: 12px;
            color: #0000008f;
        }

        .logo {
            display: block;
        }
    }
}
</style>