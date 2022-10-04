<template>
    <Main>
        <div class="project-grid">
            <ProjectItem v-for="item in datalist" :project_data="item" mode="complete"></ProjectItem>
        </div>
    </Main>
</template>
<script setup lang='ts'>
import Main from '../../components/Main.vue';
import ProjectItem from '../../components/ProjectItem.vue';
const data = {
    id: 123,
    cn_authors: '王冠云*，陶冶*，Ozguc Bertug Capunaman，Humphrey Yang，姚力宁',
    en_authors: 'Guanyun Wang*, Ye Tao*, Ozguc Bertug Capunaman, Humphrey Yang, Lining Yao',
    first_author: 'Guanyun Wang',
    cn_name: '4D打印电路',
    en_name: 'MorphingCircuit',
    short_abstract: 'An integrated design, simulation, and fabrication workflow that combines electronic functions with forms through 4D printing, which effectively reduces cost, production time, and e-waste.',
    abstract: {
        en: 'We present A-line, a 4D printing system for designing and fabricating self-folding three-dimensional shapes out of simple linear elements. In addition to the commonly known benefit of 4D printing to save printing time, printing materials, and packaging space, A-line also takes advantage of the unique properties of thin lines, including their suitability for compliant mechanisms and ability to travel through narrow spaces and self-deploy or self-lock on site.',
        cn: '基于4D打印技术，我们开发了一套从“3D设计”到“1D打印”到“3D自我折叠”的个性化线性结构制作方法。该方法不仅能充分发挥4D打印技术的制作优点（如：节省打印时间、打印耗材、包装空间），又可发挥线性结构的独特性能（如：柔性机制、自我展开机制、自锁机制）。',
    },
    create_date: 'December 2020',
    view_count: 1864,
    hero_img: 'https://dummyimage.com/600x400/000/ffffff&text=Hero',
    hypertext: '<h1>Test / 测试</h1><p>方面方面方面</p>',
    imgs: [
        'https://dummyimage.com/600x400/000/ffffff&text=Hero1',
        'https://dummyimage.com/600x400/000/ffffff&text=Hero2',
        'https://dummyimage.com/600x400/000/ffffff&text=Hero3'
    ]
}
const datalist = [data, data, data, data]
</script>
<style lang="scss" scoped>
.project-grid {
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
}
</style>