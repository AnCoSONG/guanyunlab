<template>
    <SectionTitle en="News" cn="新闻"></SectionTitle>
    <Main>
        <News :withTitle="false" :newss="newss"/>
    </Main>
</template>
<script setup lang='ts'>
import SectionTitle from '../../components/SectionTitle.vue';
import Main from '../../components/Main.vue';
import News from '../home/News.vue';
import { reactive } from 'vue';
import { apiFetchHomeNews } from '../../api';

const newss = reactive<News[]>([])
const res = await apiFetchHomeNews(10)
newss.splice(0, newss.length, ...res)
</script>
<style lang="scss" scoped>

</style>