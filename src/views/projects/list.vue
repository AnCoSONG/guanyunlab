<template>
    <Main>
        <div class="project-grid">
            <ProjectItem v-for="item in projects" :project_data="item" mode="complete"></ProjectItem>
        </div>
    </Main>
</template>
<script setup lang='ts'>
import { reactive } from 'vue';
import { apiFetchProjects } from '../../api';
import Main from '../../components/Main.vue';
import ProjectItem from '../../components/ProjectItem.vue';

const projects = reactive<ProjectListItem[]>([])
const res = await apiFetchProjects()
projects.splice(0, projects.length, ...res)
</script>
<style lang="scss" scoped>
.project-grid {
    padding-top: 80px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 40px;

    @media (min-width: 800px) and (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 40px;
        grid-column-gap: 40px;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-flow: wrap column;
        justify-content: flex-start;
        align-items: center;
        grid-row-gap: 20px;
        grid-column-gap: 20px;
    }

    @media (max-width: 700px) {
        padding-top: 0px;
    }

}
</style>