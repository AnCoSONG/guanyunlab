<template>
    <SectionTitle en="About" cn="关于"></SectionTitle>
    <HeroSwiper :hero-imgs="heroImgs" :not-route="true" class="about-swiper"></HeroSwiper>
    <Main>
        <CCC />
        <ZeroFiveLine></ZeroFiveLine>
        <div class="desc">
            <p>浙江大学国际设计研究院正式建院于2011年11月，致力于创新设计的人才培养、学术研究和社会服务。研究院是浙江大学设计学博士点建设的承担单位，也是工业设计、产品设计本科以及设计学、工业设计工程硕士点建设的参与单位，是浙江大学计算机辅助设计与图形学国家重点实验室的成员单位。研究院与中国创新设计产业战略联盟、日本设计促进会等全面合作；与阿里巴巴、苹果、飞利浦、佳能等企业合作开发企业驱动的创新设计课程、工作坊及联合科研。
            </p>
            <p>Zhejiang University International Design Institute was formally established in November 2011, dedicated
                to talent training, academic research and social services in innovative design. The research institute
                is the undertaking unit of the construction of the doctoral program of design science of Zhejiang
                University, and also the participating unit of the construction of the undergraduate program of
                industrial design, product design and the master program of design science and industrial design
                engineering. It is a member of the State Key Laboratory of Computer Aided Design and Graphics of
                Zhejiang University. unit. The institute cooperates with China Innovation Design Industry Strategic
                Alliance, Japan Design Promotion Association, etc.; cooperates with Alibaba, Apple, Philips, Canon and
                other enterprises to develop enterprise-driven innovative design courses, workshops and joint scientific
                research.</p>
        </div>
    </Main>
</template>
<script setup lang='ts'>
import SectionTitle from '../../components/SectionTitle.vue';
import HeroSwiper from '../../components/HeroSwiper.vue';
import Main from '../../components/Main.vue';
import CCC from '../../components/CCC.vue';
import ZeroFiveLine from '../../components/ZeroFiveLine.vue';
import AboutImg from '../../assets/about.png';
import { apiFetchAboutImgs } from '../../api';
import { reactive } from 'vue';

const heroImgs = reactive<HeroImg[]>([])
const res = await apiFetchAboutImgs()
heroImgs.push(...res.map((img) => ({
    src: img,
    href: '#'
})))

</script>
<style lang="scss" scoped>
.about-swiper {
    @media (max-width: 700px) {
        padding-top: 24px;
    }
}

.desc {
    margin-top: 24px;
    font-size: 16px;
    line-height: 24px;
    color: #4c4c4c;

    p {
        margin-bottom: 24px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>