<template>
    <SectionTitle en="Publications" cn="已发表论文"></SectionTitle>
    <Main>
        <InfoBoxWithUpperLine v-for="item, index in publicationData">
            <div class="paper-item" >
                <img class="img" :src="item.img" />
                <div class="info">
                    <div class="authors">{{item.authors}}</div>
                    <div class="title" @click="openPaper(item.href)">{{item.title}}</div>
                    <div class="venue">{{item.venue}}</div>
                </div>
            </div>
        </InfoBoxWithUpperLine>
    </Main>
</template>
<script setup lang='ts'>
import Main from '../../components/Main.vue';
import SectionTitle from '../../components/SectionTitle.vue';
import InfoBoxWithUpperLine from '../../components/InfoBoxWithUpperLine.vue';
import { onMounted, ref } from 'vue';

const publicationData: Paper[] = [
    {
        id: 1,
        img: 'https://dummyimage.com/600x400/000/ffffff&text=Paper1',
        title: 'MorphingCircuit: An Integrated Design, Simulation, and Fabrication Workflow for Self-morphing Electronics',
        authors: 'Guanyun Wang, Fang Qin, Haolin Liu, Ye Tao, Yang Zhang, Yongjie Jessica Zhang, Lining Yao',
        venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous TechnologiesVolume 4Issue 4December 2020 Article No.: 157pp 1–26',
        href: 'https://www.baidu.com'
    },
    {
        id: 1,
        img: 'https://dummyimage.com/600x400/000/ffffff&text=Paper1',
        title: 'MorphingCircuit: An Integrated Design, Simulation, and Fabrication Workflow for Self-morphing Electronics',
        authors: 'Guanyun Wang, Fang Qin, Haolin Liu, Ye Tao, Yang Zhang, Yongjie Jessica Zhang, Lining Yao',
        venue: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous TechnologiesVolume 4Issue 4December 2020 Article No.: 157pp 1–26',
        href: 'https://www.baidu.com'
    }
]

const openPaper = (to: string) => {
    window.open(to, "_blank")
}
</script>
<style lang="scss" scoped>
.paper-item {
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 700px) {
        flex-flow: nowrap column;
    }

    .img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        display: block;
        margin-right: 20px;

        @media (max-width: 700px) {
            // display: none;
            align-self: flex-start;
            margin-bottom: 10px;
        }
    }

    .info {
        width: 100%;
        position: relative;
        .authors {
            font-weight: 400;
            font-size: 12px;
            color: #747474;
        }

        .title {
            font-size: 14px;
            color: #454545;
            display: inline-block;
            cursor: pointer;
            font-weight: 500;
        }

        .venue {
            font-weight: 400;
            font-size: 12px;
            color: #747474;
        }
    }

    
}
</style>