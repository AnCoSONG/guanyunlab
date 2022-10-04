<template>
    <div class="home-page-swiper">
        <Swiper :modules="modules" class="main-swiper" :space-between="24" :slides-per-view="perViews" navigation :autoplay="{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}" :loop="true">
            <SwiperSlide v-for="item in datalist">
                <ProjectItem :project_data="item" mode="simple"></ProjectItem>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup lang='ts'>
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { debounce } from '../../utils/index'
import { computed, ref } from 'vue';
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
const modules = [Autoplay, Navigation]
const perViews = ref(Math.round(Math.min(window.innerWidth / 600, 4)))

window.addEventListener('resize', debounce(() => {
    perViews.value = Math.round(Math.min(window.innerWidth / 600, 4))
}, 50))
</script>
<style lang="scss" scoped>
.home-page-swiper {
    // margin
    box-sizing: border-box;
    padding-bottom: 80px;

    .main-swiper {

        &:deep(.swiper-button-prev), &:deep(.swiper-button-next)  {
            color: #AAA;
            // width: 10px;
            // background-color: #5d5347;
            // padding: 10px;
            // box-sizing: border-box;
            // opacity: 0.5;
            
        }
        &:deep(.swiper-button-prev) {
            left: -14px;
            &::after {
                content: "〈"
            }
        }
        &:deep(.swiper-button-next) {
            right: -14px;
            &::after {
                content: "〉"
            }
        }
    }
}


</style>