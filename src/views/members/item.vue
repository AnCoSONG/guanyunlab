<template>
    <SectionTitle en="Members" cn="人员"></SectionTitle>
    <div class="hero-info-wrapper">
        <img :src="data.hero_avatar" alt="" class="hero_img">
        <div class="info">
            <div class="en-name">{{data.name.en}}</div>
            <div class="cn-name">{{data.name.cn}}</div>
            <div class="title"> <b>{{data.title.cn}}</b> / {{data.title.en}}</div>
        </div>
    </div>
    <Main>
        <div class="hyper-text-wrapper">
            <RichTextWrapper :html="data.hypertext"></RichTextWrapper>
        </div>
    </Main>
</template>
<script setup lang='ts'>
import SectionTitle from '../../components/SectionTitle.vue';
import Main from '../../components/Main.vue';
import tempImg from '../../assets/ad700706241c2d5652335421ba66cac9-768x768.jpg'
import RichTextWrapper from '../../components/RichTextWrapper.vue';

withDefaults(defineProps<{
    data: Member
}>(), {
    data: () => ({
        id: 123,
        avatar: 'https://dummyimage.com/600x600/f2f2f2/141414&text=logo',
        hero_avatar: tempImg,
        name: {
            cn: '陶冶',
            en: 'Ye Tao'
        },
        title: {
            cn: '副教授',
            en: 'Assosicate Professor',
        },
        hypertext: '<p>TAO Ye is an Associate Professor and researcher of industrial design at Zhejiang University City College. Her research revolves around the intersection of computational design, digital fabrication, human craft and natural science, and applies that knowledge to design new interactive entities or interfaces. Her goal is to wise apply technology, enhance multi-sensory and achieve better value by employing design principles inspired or engineered by Nature, Beauty and Mercy. Areas of application include product design, as well as digital design and fabrication.</p><p>浙大城市学院工业设计系副教授，杭州市西湖学者。卡内基梅隆大学人机交互系访问学者，浙江大学工业设计系博士后。</p><p>研究交织于数字化设计、数字化制造、人文手工艺等领域，秉承整合“真”“美”“善”的设计原则，发明面向现代设计与制造的新型交互产品及界面。主持国家自然科学基金青年基金项目，研究成果在CHI、UIST、CSCW、UbiComp、TEI等人机交互设计领域顶级学术会议上发表，已获得授权发明专利9项。设计作品已获得红点、iF等国内外设计奖项20余项。</p><hr/><h1>Publications / 论文</h1><ul><li>You W, Jiang H, Yang Z, et al. Automatic synthesis of advertising images according to a specified style[J]. Frontiers of Information Technology & Electronic Engineering, 2020: 1-12.</li><li>You W T, Sun L Y, Yang Z Y, et al. Automatic advertising image color design incorporating a visual color analyzer[J]. Journal of Computer Languages, 2019, 55: 100910.</li></ul><hr/><h1>Awards / 获奖</h1><ul><li>电子折纸启发的产品设计教育套件，中国好设计创意奖，中国创新设计产业战略联盟，2019</li></ul><hr/><h1>Connect / 联系方式</h1><ul><li>Email: taoye@zucc.edu.cn</li><li>Web: http://taoye.me/</li></ul>'
    })
})
</script>
<style lang="scss" scoped>
.hero-info-wrapper {
    background-color: #f2f2f2;
    padding-top: 40px;
    padding-left: 10%;
    padding-right: 10%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 3fr 7fr;
    grid-column-gap: 20px;
    align-items: flex-end;
    position: relative;
    width: 100%;

    @media (max-width: 700px) {
        padding-left: 12px;
        padding-right: 24px;
        padding-top: 24px;
        margin-top: 13px;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;

    }

    @media (min-width: 1900px) {
        grid-template-columns: 5fr 15fr;
        grid-column-gap: 60px;
    }

    .hero_img {
        width: 100%;
        height: auto;
        display: block;
    }

    .info {
        margin-bottom: 40px;



        @media (max-width: 700px) {
            margin-bottom: 16px;
        }

        @media (min-width: 700px) and (max-width: 1024px) {
            margin-bottom: 32px;
        }

        @media (min-width: 1900px) {
            margin-bottom: 60px;
        }

        .en-name {
            color: black;
            font-size: 20px;
            line-height: 1.6;
            font-weight: bold;

            @media (max-width: 350px) {
                font-size: 16px;
                line-height: 1.5;
            }
        }

        .cn-name {
            color: black;
            font-size: 18px;
            line-height: 1.6;
            font-weight: bold;

            @media (max-width: 350px) {
                font-size: 14px;
                line-height: 1.5;
            }
        }

        .title {
            color: #575757;
            font-size: 12px;
            line-height: 1.6;

            // line-height: 1.6;
            @media (max-width: 350px) {
                line-height: 1.5;
            }
        }

    }
}

.hyper-text-wrapper {
    padding-top: 40px;
    box-sizing: border-box;

    @media (max-width: 700px) {
        padding-top: 0px;
    }
}
</style>