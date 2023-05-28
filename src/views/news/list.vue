<template>
    <SectionTitle en="News" cn="新闻"></SectionTitle>
    <Main>
        <News :withTitle="false"/>
    </Main>
</template>
<script setup lang='ts'>
import SectionTitle from '../../components/SectionTitle.vue';
import Main from '../../components/Main.vue';
import News from '../home/News.vue';
</script>
<style lang="scss" scoped>

</style>