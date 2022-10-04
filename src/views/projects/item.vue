<template>
    <HeroSwiper :hero-imgs="[{src: 'https://dummyimage.com/2400x1600/ff0000/ffffff&text=Hero1', href: '#'}]" :not-route="true"/>
    <Main>
        <div class="item-main">
            <div class="basic-info">
                <div class="name-date-views">
                    <MainTitle type="same" :en="data.en_name" :cn="data.cn_name" />
                    <div class="date">{{data.create_date}}</div>
                    <div class="views">({{data.view_count}} Views)</div>
                </div>
                <div class="authors-abstracts">
                    <div class="authors">
                        <div class="en-author">{{data.en_authors}}</div>
                        <div class="cn-author">{{data.cn_authors}}</div>
                    </div>
                    <div class="abstracts">
                        <div class="en-abstract">{{data.abstract.en}}</div>
                        <div class="cn-abstract">{{data.abstract.cn}}</div>
                    </div>
                </div>
            </div>
            <ZeroFiveLine></ZeroFiveLine>
            <div class="hyper-text-wrapper">
                <RichTextWrapper :html="data.hypertext" />
            </div>
        </div>
    </Main>
</template>
<script setup lang='ts'>
import HeroSwiper from '../../components/HeroSwiper.vue';
import Main from '../../components/Main.vue';
import MainTitle from '../../components/MainTitle.vue';
import RichTextWrapper from '../../components/RichTextWrapper.vue';
import ZeroFiveLine from '../../components/ZeroFiveLine.vue';
defineProps<{
    id: string | number,
}>()
// 通过id异步加载数据
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
    hypertext: '<h2>Test / 测试</h2><p>方面方面方面</p><b>哈喽</b><hr><h2>Publications / 已发表论文</h2><ul><li><a href="https://www.baidu.com">A-line: 4D Printing Morphing Linear Composite Structures. CHI 2019</a></li></ul><hr><img src="https://dummyimage.com/600x400/000/ffffff&text=Hero1"></img><img src="https://dummyimage.com/800x400/000/ffffff&text=Hero3"></img>',
    imgs: [
        'https://dummyimage.com/600x400/000/ffffff&text=Hero1',
        'https://dummyimage.com/600x400/000/ffffff&text=Hero2',
        'https://dummyimage.com/600x400/000/ffffff&text=Hero3'
    ]
}
</script>
<style lang="scss" scoped>
.item-main {
    position: relative;
    width: 100%;

    .basic-info {
        display: flex;
        flex-flow: wrap row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 24px 0px;
        // border-bottom: 1px solid #141414;

        @media (max-width: 1000px) {
            flex-flow: nowrap column;
            padding-top: 13px;
        }

        .name-date-views {
            margin-right: 40px;
            flex-grow: 0;
            max-width: calc(35% - 40px);
            // box-sizing: border-box;

            @media (max-width: 1000px) {
                margin-right: 0;
                max-width: unset;;
                width: 100%;
                margin-bottom: 24px;
            }

            .date {
                color: #454545;
                font-size: 16px;
                line-height: 1.5;
            }

            .views {
                color: #454545;
                font-size: 14px;
                line-height: 1.5;
            }
        }

        .authors-abstracts {
            min-width: 65%;
            flex: 1;

            @media (max-width: 1000px) {
                min-width: unset;
                width: 100%;
            }

            .authors {
                margin-bottom: 20px;

                .en-author {
                    font-weight: bold;
                }
            }

            .en-abstract {
                margin-bottom: 24px;
            }
        }
    }

    .hyper-text-wrapper {
        position: relative;
        width: 100%;
        padding: 24px 0px;
        // padding-top: 0px;
    }

}
</style>