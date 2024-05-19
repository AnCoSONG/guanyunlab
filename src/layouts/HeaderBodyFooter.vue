<template>
    <Header labname="智慧形态实验室" desc="Guanyun Lab" />
    <div class="body">
        <slot></slot>
    </div>
    <Footer :listFooter="useZeroPadTopFooter"/>
</template>
<script setup lang='ts'>
import Header from 'comps/Header.vue';
import Footer from 'comps/Footer.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref, watch } from 'vue';

const useZeroPadTopFooter = ref(false)
const route = useRoute()

const routeLogic = (newPath: string) => {
    if(newPath === '/publication' || newPath === '/news' || newPath === '/') {
        useZeroPadTopFooter.value = true
    } else {
        useZeroPadTopFooter.value = false
    }
}
onMounted(() => {
    routeLogic(route.path)
})
watch(() => route.path, routeLogic)
</script>
<style lang="scss" scoped>
.body {
    width: 100%;
    position: relative;
    // padding: 0px 24px;
    padding-top: 13px;
    padding-bottom: 1px;
    box-sizing: border-box;
    // background-color: white;
}
</style>