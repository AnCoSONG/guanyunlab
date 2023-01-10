<template>
    <footer class="global-footer">
        <zero-five-line/>
        <div class="main-footer">
            <div class="text">
                Copyright &copy; Guanyun Lab, Zhejiang University / 浙江大学智慧形态实验室, All rights reserved.
            </div>
            <!-- <img class="logo" src="https://dummyimage.com/48x48/141414/f5f5f5&text=logo"/> -->
        </div>
    </footer>
</template>
<script setup lang='ts'>
import ZeroFiveLine from './ZeroFiveLine.vue';

</script>
<style lang="scss" scoped>
.global-footer {
    position: relative;
    width:100%;
    padding: 14%;
    padding-top: 60px;
    padding-bottom: 60px;
    box-sizing: border-box;
    // background-color: blue;
    @media (max-width: 700px) {
        padding: 24px;
    }
    .main-footer {
        // background-color: red;
        // border-top: 1px solid $fgcolor;
        padding-top: 24px;
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
            font-size: 14px;
        }

        .logo {
            display: block;
        }
    }
}
</style>