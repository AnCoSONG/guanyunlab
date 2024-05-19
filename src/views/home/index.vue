<template>
    <HeroSwiper :hero-imgs="heros" :enable-max-height="true" />
    <div style="background-color: white; z-index: 1;position: relative; margin-bottom: -1px;">
        <Main pad>
            <!-- <CCC></CCC> -->
        </Main>
        <HomeSwiper></HomeSwiper>
        <Main>
            <News :newss="newss"></News>
            <!-- <News en_title="Projects" cn_title="项目" :newss="projects" title_key="cn_name" last_date_key="create_date"
                route_parent="projects" date_text="CREATE" style="margin-top: 40px;" is-project></News> -->
        </Main>
    </div>
</template>
<script setup lang='ts'>
import HeroSwiper from '../../components/HeroSwiper.vue';
import Main from '../../components/Main.vue';
import CCC from '../../components/CCC.vue';
import MainTitle from '../../components/MainTitle.vue'
import HomeSwiper from './HomeSwiper.vue';
import News from './News.vue';
import { apiFetchHomeHeros, apiFetchHomeNews, apiFetchHomeProjects } from '../../api';
import { reactive } from 'vue';
import { Router } from 'vue-router';
import { parseEnName } from '../../utils';
const heros = reactive<HeroImg[]>([])
const res = await apiFetchHomeHeros()
heros.splice(0, heros.length, ...res)

const newss = reactive<News[]>([])
const news_res = await apiFetchHomeNews(10)
newss.splice(0, newss.length, ...news_res)

const projects = reactive<ProjectListItem[]>([])
const projects_res = await apiFetchHomeProjects(8)
projects.splice(0, projects.length, ...projects_res)


</script>
<style lang="scss" scoped></style>