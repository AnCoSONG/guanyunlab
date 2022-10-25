<template>
    <div class="home-page-swiper">
        <Swiper :modules="modules" class="main-swiper" :space-between="24" :slides-per-view="perViews" navigation :autoplay="{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}" :loop="true">
            <SwiperSlide v-for="item in projects">
                <ProjectItem :project_data="item" mode="simple"></ProjectItem>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup lang='ts'>
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { debounce } from '../../utils/index'
import { computed, reactive, ref } from 'vue';
import ProjectItem from '../../components/ProjectItem.vue';
import { apiFetchHomeProjects } from '../../api';

const projects = reactive<ProjectListItem[]>([])
const res = await apiFetchHomeProjects(8)
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