<template>
    <HeroSwiper :hero-imgs="heros" enable-max-height/>
    <div style="background-color: white; z-index: 1;position: relative; margin-bottom: -1px;">
        <Main pad>
            <!-- <CCC></CCC> -->
        </Main>
        <HomeSwiper></HomeSwiper>
        <Main>
            <News></News>
        </Main>
    </div>
</template>
<script setup lang='ts'>
import HeroSwiper from '../../components/HeroSwiper.vue';
import Main from '../../components/Main.vue';
import CCC from '../../components/CCC.vue';
import HomeSwiper from './HomeSwiper.vue';
import News from './News.vue';
import { apiFetchHomeHeros } from '../../api';
import { reactive } from 'vue';
const heros = reactive<HeroImg[]>([])
const res = await apiFetchHomeHeros()
heros.splice(0, heros.length, ...res)

</script>
<style lang="scss" scoped>

</style>