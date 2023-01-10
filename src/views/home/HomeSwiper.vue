<template>
    <div class="home-page-swiper">
        <div class="left-controller" @click="swiperRef?.slidePrev()">
            <img class="btn" :src="leftBtn" alt="right btn">
        </div>
        <Swiper @swiper="(swiper) => swiperRef = swiper" :modules="modules" class="main-swiper" :space-between="24" :slides-per-view="perViews" :autoplay="{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}" :loop="true">
            <SwiperSlide v-for="item in projects">
                <ProjectItem :project_data="item" mode="simple"></ProjectItem>
            </SwiperSlide>
        </Swiper>
        <div class="right-controller">
            <img class="btn" :src="rightBtn" alt="left btn" @click="swiperRef?.slideNext()"/>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'
import { debounce } from '../../utils/index'
import { computed, onMounted, reactive, ref } from 'vue';
import ProjectItem from '../../components/ProjectItem.vue';
import { apiFetchHomeProjects } from '../../api';
import leftBtn from '../../assets/arrow_left.svg'
import rightBtn from '../../assets/arrow_right.svg'

const projects = reactive<ProjectListItem[]>([])
const res = await apiFetchHomeProjects(8)

const swiperRef = ref()
projects.splice(0, projects.length, ...res)
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
    display: flex;
    flex-flow: nowrap row;

    .left-controller, .right-controller {
        min-width: 14%;
        max-width: 14%;
        display: flex;
        flex-flow: nowrap column;
        justify-content: center;
        // align-items: center;

        @media (max-width: 700px) {
            min-width: 24px;
            max-width: 24px;
        }

        .btn {
            width: 100%;
            max-width: 36px;
            cursor: pointer;
        }
    }

    .left-controller {
        align-items: flex-end;
    }

    .right-controller {
        align-items: flex-start;
    }
    

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